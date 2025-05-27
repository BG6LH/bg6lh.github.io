---
aliases:
  - Understanding the EFHW Antenna Once More
author:
  - BG6LH
category:
  - Antenna
created: 2025-05-27 06:39:23
date: 2022-10-05 13:19:00 +08:00
description: "国庆期间调试好了一条水平架设的20米端馈半波天线EFHW4010，让电台在40/20/15/10米上工作的非常出色，FTDX10重装上阵。"
image: "https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyekUBAc9zhZ5fzkSgDticPJofrMW9qVB0VSUPLnwsibq0B6h5Spw8kOicNLkqN0pgZT3q6H8ib38PbRw/0?wx_fmt=jpeg"
source: "https://mp.weixin.qq.com/s/nhfEkFwDU180Q9r2uq1S-Q"
tags:
  - Antenna
  - EFHW
title: 再次认识端馈半波天线(EFHW)
titleSlug: understanding-the-efhw-antenna-once-more
updated: 2025-05-27 06:42:17
---


国庆期间调试好了一条水平架设的 20 米 端馈半波天线 EFHW4010 ，让电台在 40/20/15/10 米上工作的非常出色 ，FTDX 10 重装上阵 。从1区通联了几个4区、6区、9区的SSB，都给了我59+的信号报告。

  

先发一张我的天线部署图。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyekUBAc9zhZ5fzkSgDticPJ8zcA3TEgsvJFfRicrnAK9UJKRamN6FyN6549kT7a3PuPWKicfJ4BOcqw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

天线从我家阳台水平横拉到对面楼上，振子的长度20米整，这正好是40米波端的半个波长，一个谐振的尺寸。馈电点电压最高，电流最低，需要一个1:49的变压器来匹配。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyKZq9Mic9Jttw8Y6TibF0gXlpJgMfnvdC6SYgUAWcqbPGzWibp4Np4FR4ibqNv27kvZVVczUtAjymJ5A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

上图是BI1EIH做的两个1:49变压器。左边是13:2圈的，匹配完的阻抗还是偏高。我用的是右边这个， 14:2圈，匹配的阻抗很完美。

严谨地说，这是一个1:49的串联谐振变压器，跟1897年特斯拉申请的特斯拉线圈专利的是一回事儿。它负责把电台输出的电压，转换为和天线阻抗匹配的电压。因为天线振子是一根独立完整的半波振子，不存在与另外的零件之间的电势平衡。所以，这种天线理论上不需要“地线”。

但实际操作上，唯一的振子不可能在频段上每一点都是完全谐振的。所以还是需要一点点“平衡”的补偿。实践中经常以同轴电缆的外皮作为“地线”。但是我的馈线部分加了不少磁环，原本是希望扼制不平衡天线的共模电流。对于EFHW天线来说，这些磁环可能会影响电缆外皮的“平衡”作用。所以我又做了一根“平衡器”（图中蓝色的部分）。它是一组各波段1/4波长的导线组合，基本可以给每个波段提供一个低阻抗的环境。我认为大功率、固定台站有必要加这个，这可能会让工作带宽更大一些。目前我也没有量化测量过，纯属 无线电老中医的思维方式。

我本想给电源和电台设备加上“电气接地”（图中黄色的部分）。但是因为家住12层的6层，实在没有办法就近接入大地。况且，EFHW天线是谐振天线，整个台站上的共模电流影响微乎其微。所以“电气接地”的想法也就放弃了。但是，安全接地、防雷接地还是要注意，能做到尽量做。我家里能保证电器都接到三头插座的零线，防雷么，主要靠旁边高楼替我扛了。

下边是整个天线架设的示意图。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyekUBAc9zhZ5fzkSgDticPJGaHEjKA3pryF4LyKqIsPibVribajUntwZeJ3KkHmOssPRaKyCwDaV1yQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

**近场辐射的影响**

我的电台设备距离天线很近，不到2米。它们会不会受到天线近场辐射的影响？在天线中间正下方不到一个波长的地方，应该会的。但是，碰巧我的设备都在天线振子的延长线上，这是半波谐振天线的零点方向，在这个范围内不会有辐射场，所以也不会影响到电台设备。

  

**未来的扩展：EFHW8010**

现在这根20米长的天线只能工作在40/20/15/10米四个波段，典型的EFHW4010天线，如果还想工作在80/30/17/12米波段，升级为EFHW8010天线，要么换40米振子，要么加一段电感。详细方案可以参考我翻译的文章，主要讲天线的原理，和1:49变压器的制作。有兴趣的朋友可以访问下边的二维码，或者原文链接。

**不得不说，对于住在高楼中间楼层的老中医来说，EFHW是最理想的天线。**

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyekUBAc9zhZ5fzkSgDticPJpxicQkLLBIsI88tV0xW4HCX5hdTknyunicrBfyPt2QKjgyTZwg3C4dyQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  


