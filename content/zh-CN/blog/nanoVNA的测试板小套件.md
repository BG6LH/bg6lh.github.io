---
aliases:
  - 'nanoVNA Testboard Kit: A Practical Guide for RF Measurements'
author:
  - BG6LH
category:
  - Posts
created: 2025-05-29 04:18:28
date: 2023-03-20 23:58:00 +08:00
description: nanoVNA Testboard买回来有点懵圈，里边有两个0805的贴片49Ω电阻，贴哪儿？整个板子上还有一个七七四十九的排母阵列，怎么用？
image: https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozjMfRDGgaU1IbicXDnDsqbp484nAxDzicEnLQudu3bhVqOoMlrbro8bOC3ICnzxhXJYkdhOicoHc5XA/0?wx_fmt=jpeg
source: https://mp.weixin.qq.com/s/KyO6IBCfBhq5Bi_D54BuYA?token=629047808&lang=zh_CN
tags:
  - nanoVNA
title: nanoVNA的测试板小套件
titleSlug: nanovna-testboard-kit
updated: 2025-05-29 04:23:01
---


在淘宝店买了一个nanoVNA的Testboard套件。 可以辅助nanoVNA测量一些元件的射频性能，测试一些电路的反射系数和插损。看起来很方便的样子。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozjMfRDGgaU1IbicXDnDsqbpCckiaQHXlTtbhC5Uj5M9a5r39xUhg6tBb8xcqZjCgMFlrsyVszYxiapA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

来自第一个把nanoVNA开源项目做成产品的[Hugen的店](https://gen111.taobao.com)

买回来有点懵圈，里边有两个0805的贴片49Ω电阻，贴哪儿？ 整个板子上还有一个七七四十九的排母阵列，怎么用？ 于是上网收集了一些资料。 在这里做一个笔记。

首先找到一张`KL0S`画的nanoVNA测试板的草图[^1]。下边这张图是完全按照比照测试板画的。有三对儿SMA母座是作为测试的接口。但是上下两对儿其实是预留给某种目的的校准、或匹配电路的。
[^1]:[https://groups.io/g/nanovna-users/attachment/25683/0/NanoVNA%20Test%20Kit%20\_KL0S\_.pdf](https://groups.io/g/nanovna-users/attachment/25683/0/NanoVNA%20Test%20Kit%20\_KL0S\_.pdf)

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozjMfRDGgaU1IbicXDnDsqbppxKrVWe4iaKTGkNPYQvBv2wTVKdWRhLWDlAFJVdibQa71IickiciaOWXnzA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)


中间一对儿SMA母座连接着7x7的测试排母阵列。但是这个阵列不是完全独立或者联通的。它有一定排布的结构 ， 用来 跨 接各种可能的 组 合 。

测试板的核心设计，其实是参考了DG8SAQ设计SDR-Kits的测试板[^2]。下边这张图是测试排母焊盘结构。
[^2]:[https://www.sdr-kits.net/documents/Testboard\_kit.pdf](https://www.sdr-kits.net/documents/Testboard\_kit.pdf)

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozjMfRDGgaU1IbicXDnDsqbpHDiatrUvgicoYaQicZEUF5EDyvywqsKQp9a6CNSFAVlApzbDBK1Q9EEeA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)


那两个0805的49Ω贴片电阻，也可以直接用来做成测试用的小工具，和测试电路组合使用。  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozjMfRDGgaU1IbicXDnDsqbprsjd2reSz8q1fPUbB6rFLCFfAo8JiccmicA6J2UnGo6l0W97Z0MrFX0A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

上图：《VNWA Testboard kit for Ham Radio Workshop》by DG8SAQ  [^2]

最后，为了从正面容易识别排母之间的关系，我用娃的琉金彩绘笔给它们上了点颜色。是不是很好看？

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozjMfRDGgaU1IbicXDnDsqbpTqLwkjedCQzW6KPGPFtq7kMBia95vaLV3JOlM3dvUzNHj4863weq3pw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)


关于具体的测试实验，DG8SAQ写过一个PPT，详细介绍了如何使用，如何DIY一些小零件辅助测试：**Experiments with the DG8SAQ VNWA and the SDR-Kits Test Board** 。[^3]


[^3]:Experiments with the DG8SAQ VNWA and the SDR-Kits Test Board, By Tom BAIER DG8SAQ：[https://groups.io/g/nanovna-users/attachment/14860/1/VNWA\_Experiments.pdf](https://groups.io/g/nanovna-users/attachment/14860/1/VNWA\_Experiments.pdf)


以上资料都在本文末尾脚注里，有兴趣的朋友可以去看看。

