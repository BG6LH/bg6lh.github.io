import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { I18nPlugin } from "@11ty/eleventy";
import pluginFilters from "./_config/filters.js";
import pluginIcons from 'eleventy-plugin-icons';
import embedEverything from "eleventy-plugin-embed-everything";
import { tasklist } from "@mdit/plugin-tasklist";
import markdownItCallouts from "markdown-it-callouts";
import markdownItMath from "markdown-it-math";
import markdownItMathTemml from "markdown-it-math/temml";
import markdownItAnchor from "markdown-it-anchor";
import pluginTOC from "eleventy-plugin-toc";
import { imgSize, obsidianImgSize } from "@mdit/plugin-img-size";
import { footnote } from "@mdit/plugin-footnote";
import { mark } from "@mdit/plugin-mark";

//import lotwQueryPlugin from "./plugins/eleventy-plugin-lotw-query/index.js"
import lotwPlugin from 'eleventy-plugin-dxcc-badges';




/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {


	// 查询LOTW积分的插件：
	eleventyConfig.addPlugin(lotwPlugin);

	//////// begin of markdown-it 插件的子插件：
	eleventyConfig.amendLibrary("md", mdLib => {
 		// 添加 markdown-it-math
		mdLib.use(markdownItMath);
		// 添加 markdown-it-math-temml
		mdLib.use(markdownItMathTemml);
		// 添加 markdown-it-tas-lists
		mdLib.use(tasklist);
		// 添加 markdown-it-anchor
		mdLib.use(markdownItAnchor);
		// 添加 markdown-it-callouts
		mdLib.use(markdownItCallouts);

		// 添加 markdown-it-img-size 的三个子插件：
		mdLib.use(imgSize);
		mdLib.use(obsidianImgSize);
		mdLib.use(footnote);
		mdLib.use(mark);

		});

	////////  end of markdown-it 插件的子插件：

	// Drafts, see also _data/eleventyDataSchema.js
	eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});

	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({"./public/": "/"});
	eleventyConfig.addPassthroughCopy({"./content/img/": "img"});
	eleventyConfig.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl");

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch CSS files
	eleventyConfig.addWatchTarget("css/**/*.css");
	// Watch images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif}");

	// Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
	// Bundle <style> content and adds a {% css %} paired shortcode
	eleventyConfig.addBundle("css", {
		toFileDirectory: "dist",
		// Add all <style> content to `css` bundle (use eleventy:ignore to opt-out)
		// supported selectors: https://www.npmjs.com/package/posthtml-match-helper
		bundleHtmlContentFromSelector: "style",
	});

	// Bundle <script> content and adds a {% js %} paired shortcode
	eleventyConfig.addBundle("js", {
		toFileDirectory: "dist",
		// Add all <script> content to the `js` bundle (use eleventy:ignore to opt-out)
		// supported selectors: https://www.npmjs.com/package/posthtml-match-helper
		bundleHtmlContentFromSelector: "script",
	});

	// Official plugins
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);



	eleventyConfig.addPlugin(I18nPlugin, {
		// any valid BCP 47-compatible language tag is supported
		defaultLanguage: "zh-CN", // Required, this site uses "en"

		// Rename the default universal filter names
		filters: {
			// transform a URL with the current page’s locale code
			url: "locale_url",

			// find the other localized content for a specific input file
			links: "locale_links",
		},

		// When to throw errors for missing localized content files
		 errorMode: "strict", // throw an error if content is missing at /en/slug
		 errorMode: "allow-fallback", // only throw an error when the content is missing at both /en/slug and /slug
		 errorMode: "never", // don’t throw errors for missing content
	});

	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed/feed.xml",
		stylesheet: "pretty-atom-feed.xsl",
		templateData: {
			eleventyNavigation: {
				key: "Feed",
				order: 4
			}
		},
		collection: {
			name: "posts",
			limit: 10,
		},
		metadata: {
			language: "zh-CN",
			title: "BG6LH的数字花园",
			subtitle: "CQ DE BG6LH K，欢迎访问我的数字花园！我的业余无线电笔记。Copyright © 2025 BG6LH",
			base: "https://bg6lh.github.io/",
			author: {
				name: "BG6LH"
			}
		}
	});

	// Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// Output formats for each image.
		formats: ["avif", "webp", "auto"],

		// widths: ["auto"],

		failOnError: false,
		htmlOptions: {
			imgAttributes: {
				// e.g. <img loading decoding> assigned on the HTML tag will override these values.
				loading: "lazy",
				decoding: "async",
			}
		},

		sharpOptions: {
			animated: true,
		},
	});

	// Filters
	eleventyConfig.addPlugin(pluginFilters);
	
	eleventyConfig.addPlugin(IdAttributePlugin, {
		// by default we use Eleventy’s built-in `slugify` filter:
		// slugify: eleventyConfig.getFilter("slugify"),
		// selector: "h1,h2,h3,h4,h5,h6", // default
	});

	// 优化构建日期短代码
	eleventyConfig.addShortcode("currentBuildDate", () => {
	// 在生产环境中，使用git commit时间而不是当前时间
	if (process.env.ELEVENTY_RUN_MODE === "build") {
		try {
			const { execSync } = require('child_process');
			const gitDate = execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim();
			return gitDate;
		} catch (error) {
			// 如果git命令失败，使用固定日期
			return new Date().toISOString().split('T')[0] + 'T00:00:00.000Z';
		}
	}
	return (new Date()).toISOString();
	});

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");


	// https://www.npmjs.com/package/eleventy-plugin-icons
	eleventyConfig.addPlugin(pluginIcons, {
		// The default value is `false`.
		sources: [
			{
			  name: "simple", // 来源名称
			  path: "./node_modules/simple-icons/icons", // 图标文件路径
			  default: true, // 设置为默认来源
			},
			{
				name: 'lucide', 
				path: 'node_modules/lucide-static/icons' }
		],
	});
	
	eleventyConfig.addPlugin(embedEverything,{
		// youtube 配置选项，插件默认支持
		// youtube: {
		// 	options: {
		// 	  allowFullscreen: false
		// 	}
		//   },

	});
	// 自定义一个哔哩哔哩 短代码：
	// 用法：{% bilibili bvid cid %}
	eleventyConfig.addShortcode("bilibili", function(bvid, cid) {
		return `<div style="position: relative; padding: 30% 45%;">
		  <iframe
			style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
			src="https://player.bilibili.com/player.html?bvid=${bvid}&cid=${cid}&page=1&high_quality=1&autoplay=false"
			frameborder="no"
			scrolling="no"
			allowfullscreen="true">
	      </iframe>
		</div>`;
	});

	// 添加 eleventy-plugin-toc：
	eleventyConfig.addPlugin(pluginTOC, {
		tags: ["h2", "h3"],       // 指定需要生成 TOC 的标题标签
		wrapper: "nav",           // 用哪个标签包裹 TOC（默认为 'nav'）
		wrapperClass: "toc",      // TOC 外层容器的 class
		ul: true,                 // 使用 ol（false）还是 ul（true）
	  });

	// 启用增量构建
	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.setQuietMode(true);
	
	// 启用构建缓存
	eleventyConfig.addGlobalData("eleventyComputed", {
		permalink: (data) => {
			// 只有在开发模式下才重新计算permalink
			if (process.env.ELEVENTY_RUN_MODE === "serve") {
				return data.permalink;
			}
			return data.permalink;
		}
	});

};

export const config = {
	// Control which files Eleventy will process
	// e.g.: *.md, *.njk, *.html, *.liquid
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],

	// Pre-process *.md files with: (default: `liquid`)
	markdownTemplateEngine: "njk",

	// Pre-process *.html files with: (default: `liquid`)
	htmlTemplateEngine: "njk",

	// These are all optional:
	dir: {
		input: "content",          // default: "."
		includes: "../_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
		output: "_site"
	},

	// -----------------------------------------------------------------
	// Optional items:
	// -----------------------------------------------------------------

	// If your site deploys to a subdirectory, change `pathPrefix`.
	// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

	// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
	// it will transform any absolute URLs in your HTML to include this
	// folder name and does **not** affect where things go in the output folder.

	// pathPrefix: "/",
	
	// 启用增量构建
	incremental: true,
};
