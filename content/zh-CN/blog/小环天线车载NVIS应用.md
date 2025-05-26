---
aliases:
  - A Half-Loop NVIS Antenna
author:
  - BG6LH
category:
  - Antenna
created: 2025-05-26 02:34:44
date: 2019-09-11 18:03:00 +08:00
description: 我把刚做好的一个小环天线装车顶上了，于是它就变成了一个NVIS半环天线。
image: http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozBOyPbrYjnAcwYUEicZdgkA6m9yxTHVlrsSnSZ27sAStgB8IW9Tj0lRyBSkyknibI3icrpI3j5KtaLw/0?wx_fmt=jpeg
source: https://mp.weixin.qq.com/s/UFZdNK0CSRpYNoNv7NUuOA
tags:
  - NVIS
  - 小环天线
title: 小环天线车载NVIS应用
titleSlug: a-half-loop-nvis-antenna
updated: 2025-05-26 02:39:12
---

刚刚新做了一个小环天线，还没来得及实验就改成半环NVIS天线装车上了。这难道不是一个近垂直入射天波天线吗？

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozBOyPbrYjnAcwYUEicZdgkAYZoDHgE1EySZ6XBia7M0Gp1tsOz664GuDUZkays07Kq1c215Q7jFygQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1) 小环天线的NIVS架设

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozBOyPbrYjnAcwYUEicZdgkAzGRstZL6lpia0O2IibFrYnhByC34X4oSWgUvpDwvWlq2sXpfkFB2T4IA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1) 临时固定，靠一个BNC接头别在T形槽上

只是另一头目前没有更好的连接，临时别在行李架横杆的T形槽里。稍微一晃动就接触不良。等到它稳定了，我用nanoVNA测试了一下，5.360MHz上驻波只有2.4！

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozBOyPbrYjnAcwYUEicZdgkAQ2SgqwGcvuTHb1TMOgG7lhbKW769tgbW1SAbC2DmpsyibSSOnQmpEHw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

5.360上测试，驻波真的可以

7M也能调下来，只是这个周三的中午，没人在这俩频道上跟我做测试。我只能接上树莓派和马工盒子，来FT8碰碰运气。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozBOyPbrYjnAcwYUEicZdgkAeGmvNFjk8knPrzhrkbD1DT4sIxWxnryYjxkkOwTicHwtuFgd9MFQDBQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1) FT8测试中

不得不说一下，nanoVNA测的结果跟上机的结果还是有差异的，它说驻波2.4，但是上了FT-818ND一发射驻波显示满格，不过还没出HVSWR警告。没办法再上个天调吧。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozBOyPbrYjnAcwYUEicZdgkA00TEVgDfpT6btp98dn9JBF0hvHRodrgibHKu8nn7BWM5gJrlX6uDwRQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1) 全套测试装置

很可惜最终还是没人收到我，我只收到了几个日本、韩国、俄罗斯的信号，最近的离我900公里远。想测NVIS效率恐怕不行了。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozBOyPbrYjnAcwYUEicZdgkA3jNGAoxDYRj1xlY2M8UA1c1sBVGZpWia7L5EphqajtMr7DTLyF7LUicw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1) iOS上的WaveGuide可以看数字模式的spots

这种形式的天线有个小名叫*菜筐天线*，常见的是装在车顶行李筐上的，行李筐做地网。我没装行李筐，只有一个横杆可能还不能形成有效的地网，而且车顶的大天窗也降低了反射的效果。或许那横杆也只是小环的一条直边。总之这还是个小环天线，一个负增益的磁场天线。今天它的辐射图应该是向上的。效率主要取决于环围起来的面积。

这副天线是我做的第二个小环。2.4米1/2馈管，变压器耦合，好处是只用一个270pf双联薄膜电容做调谐。方案参考了K1FM做的思路。调谐和耦合在环的同一端。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozBOyPbrYjnAcwYUEicZdgkALIsAMicXjr4tBxo8c9SUy8yzCdSK9prtibtBvnfPHTe1YOrEIke8H67g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1) K1FM的小环原理图

我的半环原理图：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozBOyPbrYjnAcwYUEicZdgkAxs7qd2xfkvXDNZrrIRCyN9y1mOTjG6s9RXKAwdyHqiarhC1cicATshUA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1) 我的半环原理图

今天还尝试了另外两种架设方式：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozBOyPbrYjnAcwYUEicZdgkAiakxibpCcHJotbRU8I0xa7md5c57m4IHebuLNueJaCJ7IrpXEzCCQoVQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1) 接两个互相绝缘的横杆

上边这种方式，两个行李架横杆互相是绝缘的，nanoVNA测的驻波大概是60多。基本调不出谐振。把俩横杆短路也没啥大改观。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozBOyPbrYjnAcwYUEicZdgkA9IVtVCuC3udwnYvnhHQ5jZ1t1ZUMezCViaO0T7KxqulqibSyptbT58cQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1) 直接把小环装车上

这种方式相当于直接把小环装在车顶，用nanoVNA测试驻波基本都在40多，显然不行，离车太近了，估计极近场（λ/10）的磁场是不理想的。我把整个小环挪到两三米外的草地上，驻波就下来了，变成了标准的小环天线。

下一步的改进计划，先找BI1EIH要回另一个机器人大脚板，把环固定好，然后，尝试一下接地的方案。接地、接地、菠萝接地、菠萝蜜接地......

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozBOyPbrYjnAcwYUEicZdgkA5v7oMX9kFyvweXVnMBO4jDe3x51kTJdAnFk87EbzUXsS3cicDY5MbAg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1) 尝试一下在车上搭铁后是否能获得一个有效的地网？

今天先聊到这儿了，73！

