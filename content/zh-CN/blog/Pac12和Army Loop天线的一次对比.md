---
aliases:
  - 'Field Test: Comparing Portable Shortwave Antennas - Pac12 vs. DIY Small Loop for FT8 Performance'
author:
  - BG6LH
category:
  - Antenna
created: 2025-05-24 03:46:59
date: 2019-08-21 18:08:00 +08:00
description: "我有两套“便携”的短波天线，一套是Pac12，一套是小环。8月初在海边交替使用了几次，分享一些心得给大家。"
image: "http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyUQa3hhb2mc8ibibMibaWNibVnzMnbra9BqcmQ9xmaJuMic8T5aiaI0X1M3BP3QFBq2mzskpxSEdkYULnQ/0?wx_fmt=jpeg"
source: https://mp.weixin.qq.com/s/w72n8Q3fy08r8bLNdbvUKw
tags:
  - ArmyLoop
  - PAC12
  - 小环天线
title: Pac12和Army Loop天线的一次对比
titleSlug: portable-hf-antennas-comparison-pac12-vs-diy-small-loop
updated: 2025-05-24 03:51:38
---


我有两套“便携”的短波天线。一套是商品化的Pac12天线，做工精美，自己配了16根2米电线做地网，经NanoVNA测量，驻波可以调到很低。另一套是4米7/8馈管做的小环天线，DIY的Army Loop，电容耦合式，调谐很麻烦，但是真能调到很低的驻波，而且带宽对于FT8来说足够大了。


这俩天线到底哪个更好使？

2019年8月初在北戴河，同一天里用不同天线做了测试，碰巧跟JE4NAN通了两次，都是FT8模式，使用的是FT-818ND，20米波段，6W发射。


![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyUQa3hhb2mc8ibibMibaWNibVns4icH8Hc0QU4LNvtl1dM6kc75nNC6zTsQdo2T06NvyrATzPibxBMBEXA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

- 一次是早上7点53分(UTC 2353+8)，在海边，用Pac12天线，他收我的信号： +1dB，我收他信号是-14dB
- 一次是中午14点06分(UTC 0606+8)，在海边800米左右的二楼阳台，用小环天线，他收我信号：-08dB，我收他的信号是-10dB

  

这么看，PAC12显然发射的效果更好，多了9个dB的增益；小环接收更好，多了4dB的增益。但是，毕竟，早上和中午的传播条件不同，到海边的距离也有800米左右的变化，四十几个波长呢。此外，他是否改变了天线和发射功率，也未尝可知。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyUQa3hhb2mc8ibibMibaWNibVnNHr6vvmp8PSsWq8J2X27R5uF8j7vYFp0DZ1Hcjb4G28ZbaabCyFo2A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

在那几天里，Pac12只在早上那次通联里用过，通过PSKreporter.info上的spots来看，接收到我的信号最远的是新西兰，澳大利亚。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyUQa3hhb2mc8ibibMibaWNibVnbWujCxzb8Bnp6TUx1Xh6NC0W8DIlpObWv5icP3iab8xm3KibfJCVrziaEA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

但是小环天线，我一直绑在阳台上。所以有时候会发现一些意想不到的spot报告。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyUQa3hhb2mc8ibibMibaWNibVn1hJpm225ibexp1m0SYBSXyaZQjeSwpZPWcaJicm9wk4I7nRupFPqE2qw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

这是8月4日下午4点的一次截屏：

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyUQa3hhb2mc8ibibMibaWNibVnwWKhpNWxPMeaMtNGlZNFYrpWsF0ib0GicmmMyaJVicV1O0ibLtBc6ecuvQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

我收到了英国的信号，法国收到了我的信号。从大圆图上看，欧洲在西北边，正好跟澳洲对着，距离虽然没有澳洲远，但一个是陆路，一个是海路。当然，绕地球大半圈走Long Path的可能性也存在。  

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyUQa3hhb2mc8ibibMibaWNibVnT1T8aHpQ3FQnrVnAjx6Urd0ibDRRTkpEXqcuuxGLlOsjpCvBezgk2AA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

这是8月4日晚上，看 hamspots.net：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyUQa3hhb2mc8ibibMibaWNibVn7FCUDVttNqkEDASZ64t5n98DDlmiaywt0pf9AeibeaTfp5iargRXiazgYQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

居然有北美台收到我的小环发的信号了，-24dB和-19dB，人耳朵是听不到嗡嗡嗡了。

  

以上算是一次使用体会，不算是严谨的对比测试。欢迎交流