---
aliases:
  - WB2CBA Low Pass Filter Testing Kit
author:
  - BG6LH
category:
  - Posts
created: 2025-05-29 04:34:13
date: 2023-04-08 04:04:00 +08:00
description: "最近对WB2CBA的低通滤波器(LPF)产生了浓厚的兴趣。为了更准确测试它们的性能，我特意做了一套测试治具。"
image: "http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwbkhLiaibLOvx3n4XrdzuNoKzzDI3icUDt9iaWThEkvY2nUF60WmImAB0OQ/0?wx_fmt=jpeg"
source: https://mp.weixin.qq.com/s/_fO_UwGNnH220wCNYN5L2Q
tags: 
  - LPF
  - WB2CBA
  - nanoVNA 
title: WB2CBA低通滤波器测试板
titleSlug: "wb2cba-low-pass-filter-testing-kit"
updated: 2025-05-29 02:23:41
---


最近对WB2CBA的低通滤波器(LPF)产生了浓厚的兴趣。为了更准确测试它们的性能，我特意做了一套测试治具。今天闲话少说，直接上图。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwAWnP7KnrGAFVNpGGcISSd9LicFgj0RdWDpcicnDsBH3xxqKSrSBDUWEw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)


## WB2CBA LPF设计

准确测试WB2CBA的低通的前提，是要先理解他的设计。以下是他的第二版LPF原理图[^1]。信号从右侧输入后，有一个FT37-43的磁环电感L3， 这是个梗。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwQHM4ERG2mOoMwhRgOTHibjasQ4ekScej8Rc8qjNmIrwTs1jNSzBDhqg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

> [!info]
> L3是为了匹配BS170部分的阻抗(12.5Ω）到L1、L2的阻抗(50Ω)。此外BS170有部分额外的电容 ，大约150～180p ，会并联在整个LPF上。在 WB2CBA的讨论组里，他确认了这部分电容的确是被考虑到设计里了。

  

## PH2LB设计的测试板

所以，才有以下的这个设计。原理图很简单。 对应 WB2CBA LPF 上的8个针脚； 在治具上分别提供了短路、负载、隔离、 直通的跳线。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwYKFh5gIgHSlJuOpLic4DicXPIVQJcZicqb6nOJV8CGmNdR5QN8XSlNZ3w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

这里有一个J10，乍一看以为是给LPF测试板通12V电压的跳线。但是分析之后， **这应该是为了短路L3用的跳线接口** 。

要声明，这不是我的原创，这是PH2LB的设计[^2]。我曾想自己设计一个不一样的，但是跟BG8NSK高老师讨论了好久，发现PH2LB的布局已经很合理了，任何改动都没有意义。我只是发现，应该给板子开个大口，这样可以方便调整磁环上的线圈。

> [!warning]  尊重原创： 
> PH2LB的设计不是开源的，并且在自己网站上销售这个套件。他声明了CC-BY-NC-ND协议，意思是，创作共用-署名-不可商业化-不可传播。为此我给PH2LB发了邮件，取得了他的认可后，我可以做我的开口板子，并在我的板子上打上“(c) PH2LB modified by BG6LH”，然后同样要声明CC-BY-NC-ND协议。 

下图是PH2LB最后做出来的样子。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwy5tIY0aCrhYS1Pd4Fqib5uUKFMPuhCuwmwjCjINUQw1Y90F09IGiaHmQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)


## 我的板子长这样

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwmHdqlkmrBAQKl4zconwroNFCZz8PtLrCoQBnf68kpgknrVcfQCicyyQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

两个SMA边座可以对准nanoVNA的接口，这样可以免除两根长长的测试电缆。 我用了 测试座， 替换了PH2LB的 排针，外露的 金 属部分 更短。 左侧的四联测试座 J9， 是用来 放 跳线的。在放LPF之前，要先对nanoVNA做一轮校准。开路校准，什么都不用插，其余的则需要把短路条线，分别插在短路、负载、隔离、直通对应的测试座上。

下图是把两个跳线插在了最右侧的测试座上。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwicUhHJfR8UtHNASuNFr1Nv9XoDcx3K005DNkopKgwqaW4NHrBbyOC8g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

这 两个跳线是 用排针 做的， 前边的是 在排针上焊了一个150p的贴片电容，插在“短路”上，用于补偿LPF上的电容 。 后 边的是 做成 了短路条线，插在“+ 12 V”上，用于短路L3（但实测 对 结 果几 乎没有 影 响） 。

下图是插上LPF以后的效果。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwCibHx4oozJicG8aRwUEkpGzUGI53U7libPjicxPf4JILBLtYiaIfZRSvGibg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

下图是反面。大豁口方便下镊子去调整磁环L1，L2上的线圈。以获得最低的插损，最大的输出功率。并且有nanoVNA测试格式的提示。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwoB1t0MMNOXYawlQnE6DZfK7Iud6I8c9ia0Jibtyuc5qxulrObkljE7cQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

下图是用nanoVNA测试40米波段LPF的结果。插损在7090附近只有1.6dB，在14340上有67dB！很好的抑制了二次谐波。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwFbbuRVv9niaVfhmgpaCLichACbiavknicznab1qaez919wNsxxUATa8efw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1) ![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwfIWIgQPTyibWhdpYcZAIxSYzdnyzogd2VF8Sibc5Y9OvnKt7LyIpr06g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

最后来张全家福。我的新老两种版本的WB2CBA LPF，和专用测试工具。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwXdSMadzdlpOBpNIiasa1iaEGp7RomaIMbuZ3sE0ar3KYK7YUJh041Wibg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

参考资料：  

[^1]: WB2CBA的LPF设计：[https://antrak.org.tr/blog/usdx-multiband-low-pass-filter/](https://antrak.org.tr/blog/usdx-multiband-low-pass-filter/)

[^2]: PH2LB的测试治具：[https://ph2lb.nl/blog/index.php?page=wb2cba-lpb-adapter-for-nanovna](https://ph2lb.nl/blog/index.php?page=wb2cba-lpb-adapter-for-nanovna)


