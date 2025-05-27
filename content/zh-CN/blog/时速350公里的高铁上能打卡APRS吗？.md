---
aliases:
  - Can APRS Work on a High-Speed Trains at 350km/h
author:
  - BG6LH
category:
  - Posts
created: 2025-05-27 04:19:45
date: 2022-09-01 03:11:00 +08:00
description: 带着这个问题和对讲机FT3DR，我登上了从北京西到郑州东的复兴号高铁。
image: https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxRWjp5IyxjwTfxr60frFbPcy214PKLMPEg4a6QwzrBWcKeNHRyfRicaxFguCLyXJrKJKsA42OAIOA/0?wx_fmt=jpeg
source: https://mp.weixin.qq.com/s/5uxxs9BUamgI4Lkmi2raQQ
tags:
  - APRS
title: 时速350公里的高铁上能打卡APRS吗？
titleSlug: can-aprs-work-on-a-high-speed-train-at-350kmph
updated: 2025-05-27 05:50:12
---

带着这个问题和对讲机FT3DR，我登上了从北京西到郑州东的复兴号高铁。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxRWjp5IyxjwTfxr60frFbPKdEBeXKyUz9BMaTfiazqnctfh4xOOTZ6YVE1KOxRex9r5bWTbTzRAWw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)


从北京出发， 在 西边 高山上就有几 个 APRS 基站，我正好坐在列车西侧靠窗位置， 基本可以目视通信 。 河北的APRS普及的不错 ，一路上 有很多业余爱好者建立的基站。 沿路的 几个大城 市， 保定、 石家庄、邢台、邯郸，也都 在铁路以西 。

我把对讲机设置为每分钟发送一次信标。 然鹅，一小时后到了石家庄，竟然一个信标都没打上。只收到过4条1区呼号的APRS信标。要知道这几个基站，平时在市区里用对讲机都能轻松打卡。
  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxRWjp5IyxjwTfxr60frFbPuBsDlRvXrh5yhWL1ia7nyBFqw4CYPNibpw1eWfyiccbfcaicLEIRvMibfcw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)


## 难道是高铁速度太快了吗？

我想到了多普勒频移。时速 350千米/小时(km/h) = 0.0972千米/秒(km/s)=97.2米/秒。APRS用的是144.640MHz的频率，波长是2米左右，这么一算移动一个波长大概是1/50秒。

找了一个在线的多普勒频移计算器，验证了一下，算出来的频率误差是94Hz，相当于0.6ppm，这点误差几乎可以忽略不计了。

>
> **多普勒雷达计算器** 
> 多普勒雷达，就是利用多普勒效应进行定位，测速，测距等工作的雷达。所谓多普勒效应就是，当声音，光和无线电波等振动源与观测者以相对速度V相对运动时，观测者所收到的振动频率与振动源所发出的频率有所不同。因为这一现象是奥地利科学家多普勒最早发现的，所以称之为多普勒效应。由多普勒效应所形成的频率变化叫做多普勒频移，它与相对速度V成正比，与振动的频率成反比。
> 
> - 移 频 (F r) =F t × ((1 + (v / c)) / (1 − (v / c)))
> - 多普勒频率(Fd)=Fr−Ft
> - Ft=原始频率，c=光速
> 
> ...
 
**看来350公里/小时的速度对VHF通信影响微乎其微。** 空间站的速度是27 000 多公里/小时，这才有多普勒效应的影响，不得不做频率补偿的话题。


眼看到了邢台，我用手动模式持续发了十几个。终于在BI1ACW-15基站上打上了两个点，说明使点劲儿还是能通的。
  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxRWjp5IyxjwTfxr60frFbPX8Vp5IHVSXWPGPb3GG3wlE5PRukozzYEEf1GUbrtlX4MV3Rz98ZrKQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  
有RAW数据为证。  


![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxRWjp5IyxjwTfxr60frFbPNKf1MsnM80cmbdMdyR2iaRSAZ3ugSLErtIZIflnicc7D3Lc3BiaMjpTicg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  
为啥高铁上这么难打卡APRS，想来想去，恐怕还是 **高铁玻璃对无线电信号衰减的太大** 。那玻璃是多层的，有金属镀膜，还有电加热丝……最终辐射出去的信号很弱了。


如果你有更好的办法在高铁上打卡APRS，欢迎分享！  

  
