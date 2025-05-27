import { DateTime } from "luxon";
import markdownit from "markdown-it";
import { transliterate, slugify } from "transliteration";

export default function(eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "yyyy-LL-dd HH:mm:ss ZZZZ");
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy-LL-dd HH:mm:ss ZZZZ');
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return the keys used in an object
	eleventyConfig.addFilter("getKeys", target => {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "posts"].indexOf(tag) === -1);
	});

	eleventyConfig.addFilter("sortAlphabetically", strings =>
		(strings || []).sort((b, a) => b.localeCompare(a))
	);

	// Parse markdown strings to HTML
	const md = new markdownit({
    	html: true, // Allow HTML tags in Markdown content
	});
	eleventyConfig.addFilter("markdown", (markdownString) => {
		return md.render(markdownString);
	});	

	// Overwrite the built-in `slugify` filter with https://github.com/yf-hk/transliteration.
	//1. Slugify to pin-yin
	eleventyConfig.addFilter("slugify", (inputString) => {
		return slugify(inputString);
	});
    //2. Transliterate to Pin Yin
	eleventyConfig.addFilter("transliterate", (inputString) => {
		return transliterate(inputString);
	});
};
