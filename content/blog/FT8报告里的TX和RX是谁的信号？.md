---
aliases: []
author:
  - BG6LH
category:
  - Posts
created: 2025-05-17 01:42:06
date: 2019-08-07 11:10:00 +08:00
description: "玩FT8数字模式，电脑会记录TX/RX两个信噪比报告，哪个是你的？哪个是对方的？我有一个好记的方式。"
image: "http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxr2zM6eiaZPXsKOhoicvW5d3fROh3tukHic3KoucbjD3cKFCbhniaLR5eIUQWDl7MEeia2iciaasQSKAUvw/0?wx_fmt=jpeg"
permalink: /blog/ft8-rst-reporting/
source: https://mp.weixin.qq.com/s/Mlp-Y8ILuRpmpslyDArCWQ
tags:
  - Clippings
title: FT8报告里的TX和RX是谁的信号？
updated: 2025-05-17 01:42:23
---

玩FT8数字模式，电脑会记录TX/RX两个信噪比报告，哪个是你的？哪个是对方的？我有一个好记的方式。

<!--more-->

玩SSB和CW的都知道RST这套信号报告，就是599这种报告方式，这是接收台给发射台的报告，是给对方的报告。

玩FT8等等数字模式，也有一套信噪比报告方式，记录的是双方信号相对于2500Hz标准噪声的强度，以分贝(dB)为单位。


完成一次FT8的QSO之后，电脑会自动记录下来当时的TX/RX两个信号报告数据。

  

然鹅，哪个是你的？哪个是对方的？当你需要给对方发QSL卡片时，RST这一栏该怎么写？分享一个好记的方法：

  

- 先把自己忘了
- 这条记录都是对方电台的TX/RX数据
- TX是他发射的强度，RX是他接收的强度

好理解吗？举个栗子，用这个方式去理解一下。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoxr2zM6eiaZPXsKOhoicvW5d3Cd6XcXLATibR9ySg2rDV0MnR1Qj3a3SMVXuKHKvLjHfzxkIlkMo8y6g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

上图是一条我和BA1GG老师通联的记录，被我的软件记录下来。其中三个信息：

- Callsign：BA1GG
- TX：+14dB
- RX：-04dB

  

这条记录表示：BA1GG，发射了+14dB的信号，接收到-04dB的信号。

  

QSL卡上如果只有RST这一栏，可以只填写TX数据。他的TX信噪比，其实是我发给他的报告，也是他想知道的，自己的信号传播到哪里？能获得多大的信噪比？所以这个TX对应的就是我给他的RST。

  

如果QSL卡上有sent和rcvd两栏怎么填？以下是这条记录的原始ADIF格式记录。里边的：

  

- rst\_sent，对应TX。
- rst\_rcvd，对应RX。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoxr2zM6eiaZPXsKOhoicvW5d3ksBen9LZficn1HHAfW9iaENCDetnTfA6UdichMCh869S8rZl0ibRaPfxlA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

如果你还记不住，多玩玩数字模式就好了。

