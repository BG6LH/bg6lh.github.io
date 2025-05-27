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

**2025-05-27更新**
- 原文的多普勒频移在线计算器有错误，导致计算结果大了一倍，现已经更新。并且采取了新的计算公式。
- 原文围绕多普勒效，应仅讨论了对载频的影响，未讨论对APRS信号音频的影响，本次补充了讨论。

---

带着这个问题和对讲机FT3DR，我登上了从北京西到郑州东的复兴号高铁。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxRWjp5IyxjwTfxr60frFbPKdEBeXKyUz9BMaTfiazqnctfh4xOOTZ6YVE1KOxRex9r5bWTbTzRAWw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)


从北京出发， 在西边高山上就有几个APRS基站，我正好坐在列车西侧靠窗位置，基本可以目视通信。河北的APRS普及的不错，一路上 有很多业余爱好者建立的基站。沿路的几个大城市，保定、石家庄、邢台、邯郸，也都在铁路以西。

我把对讲机设置为每分钟发送一次信标。 然鹅，一小时后到了石家庄，竟然一个信标都没打上。只收到过4条1区呼号的APRS信标。要知道这几个基站，平时在市区里用对讲机都能轻松打卡。


![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxRWjp5IyxjwTfxr60frFbPuBsDlRvXrh5yhWL1ia7nyBFqw4CYPNibpw1eWfyiccbfcaicLEIRvMibfcw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)


## 难道是高铁速度太快了吗？

### 多普勒效应

所谓多普勒效应就是，当声音，光和无线电波等振动源与观测者以相对速度V相对运动时，观测者所收到的振动频率与振动源所发出的频率有所不同。因为这一现象是奥地利科学家多普勒最早发现的，所以称之为多普勒效应。由多普勒效应所形成的频率变化叫做多普勒频移，它与相对速度V成正比，与振动的频率成反比。

高铁时速350千米/小时(km/h) = 0.0972千米/秒(km/s)=97.2米/秒。APRS用的是144.640MHz的频率，波长是2米左右，这么一算移动一个波长大概是1/50秒。这大约是50Hz的样子。

找了一个在线的多普勒频移计算器，验证了一下，算出来的频率误差是46.8Hz，相当于0.32ppm，这点误差几乎可以忽略不计了。

对于速度远小于光速的情况，经典多普勒频移近似公式：$fd = \frac{v}{c} \cdot f_0$

其中：
- $f_d$：多普勒频移（Hz）
- $v = 350KM/s = 97.2\, \text{m/s}$：为高铁的移动的速度
- $c = 3 \times 10^8 \, \text{m/s}$：为无线电波的速度、光速 
- $f_0 = 144.640 \times 10^6 \, \text{Hz}$：为信号的载频

代入数值：$f_d = \frac{97.2}{3 \times 10^8} \cdot 144.640 \times 10^6 \approx 46.8\, \text{Hz}$


$频率误差PPM = \frac{f_d}{f_0} \times 10^6 = \frac{46.8}{144640000} \times 10^6 \approx 0.3236 \, \text{ppm}$



### 对APRS信号的影响

46.8Hz的频偏，对于APRS信号的144.640MHz载频来说，影响微乎其微。

但是这个频偏一般会传导到信号的音频部分会怎样？

APRS信号使用的是AX.25协议帧格式的AFSK，Audio Frequency-Shift Keying，音频频移键控进行调制的。分别用1200Hz的音频表示1，2200Hz音频表示0。46.8Hz的误差并不是很突出。

此外IARU第1区对VHF技术建议中，对信标台的频率容错要求是±200Hz，对音频响应的范围是300～3000Hz，这些也都包容了46.8Hz那点误差。


## 速度不是关键影响

**看来350公里/小时的速度对VHF通信影响微乎其微。** 空间站的速度是27000多公里/小时，这才有多普勒效应的影响，不得不做频率补偿的话题。

眼看到了邢台，我用手动模式持续发了十几个。终于在BI1ACW-15基站上打上了两个点，说明使点劲儿还是能通的。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxRWjp5IyxjwTfxr60frFbPX8Vp5IHVSXWPGPb3GG3wlE5PRukozzYEEf1GUbrtlX4MV3Rz98ZrKQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  
有RAW数据为证。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxRWjp5IyxjwTfxr60frFbPNKf1MsnM80cmbdMdyR2iaRSAZ3ugSLErtIZIflnicc7D3Lc3BiaMjpTicg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)


## 窗户可能是核心问题

为啥高铁上这么难打卡APRS，想来想去，恐怕还是 **高铁玻璃对无线电信号衰减的太大** 。那玻璃是多层的，有金属镀膜，还有电加热丝……最终辐射出去的信号很弱了。


如果你有更好的办法在高铁上打卡APRS，欢迎分享！  

## 参考资料

- [https://www.omnicalculator.com/physics/doppler-effect](https://www.omnicalculator.com/physics/doppler-effect)
- ~~原文的多普勒雷达在线计算工具不准:https://www.osgeo.cn/app/sc416~~

- IARU-R1 VHF Handbook: [https://www.iaru-r1.org/wp-content/uploads/2024/11/VHF_Handbook_V10_02.pdf](https://www.iaru-r1.org/wp-content/uploads/2024/11/VHF_Handbook_V10_02.pdf)
