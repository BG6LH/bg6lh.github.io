---
aliases:
  - Null Modem RS-232C Connector of FTdx10
author:
  - BG6LH
category:
  - Posts
created: 2025-05-27 06:48:23
date: 2022-11-12 01:39:00 +08:00
description: 这是多么完美的一天，两个吵架的人都没错，连八重洲都是对的，就我这个看热闹的错了！
image: https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozzgVD5Q2s96ISPH3N4QJsBZ1vrCc4a2GxbiafBsCgakuGA1ASdicOgjOgG6QiccdH7whZwr7zhzNnCQ/0?wx_fmt=jpeg
source: https://mp.weixin.qq.com/s/Z_JCgCAVa6bmIyb2dBYqNA?token=644013800&lang=zh_CN
tags:
  - RS232
  - null-modem
title: FTDX10使用RS-232C接口CAT操作指北
titleSlug: null-modem-rs232c-connector-of-ftdx10
updated: 2025-05-27 06:57:47
---

![cover_image](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozzgVD5Q2s96ISPH3N4QJsBZ1vrCc4a2GxbiafBsCgakuGA1ASdicOgjOgG6QiccdH7whZwr7zhzNnCQ/0?wx_fmt=jpeg)

原创 BG6LH [BG6LH](https://mp.weixin.qq.com/s/) *2022年11月12日 01:39*

因为要腾出FTDX10的USB接口，给SCU-LAN10做远程控制，我就琢磨用RS-232C电缆控制FTDX10。

逛了几个FTDX10的论坛，发现关于电缆的选择众说纷纭。ftdx10@groups.io 有两个人为这事儿还较真儿了。Bob KC9RF 说，应该用第2、3针脚交叉的。他专门测试了是2-3，3-2的，并验证成功。另一个叫Franco的说不能用交叉的，他就是用一根RS-232C直连的电缆，直接用在电脑上完全没问题，还测试了电缆的针脚，真的是2-2，3-3的。而且八重洲出的 FTDX10 CAT 操作参考手册，第3页说，一定要用标准的RS-232C电缆，不是那种被称作“非modem”的电缆。它说“非猫”就那种2、3针交叉的RS-232C电缆。

我找来这份英文版的《FTDX10 CAT operation Reference Manual》，上边果然是这么说的。那好吧，我就买根标准的RS-232C转USB的电缆，买的时候还专门跟客服反复确认了，它不是2-3交叉的。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozzgVD5Q2s96ISPH3N4QJsBOLEiaIUUEDrFfZ32xG1n8tKxgOyicc9JCtWicNBltMQv7LT3ibdxcMic8RQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

等电缆到货，把它跟FTDX10和RadioPi接上，打开WSJT-X，不灵。于是我花了一晚上研究树莓派世界的USB驱动、Hamlib rigctl、设备模块加载、 修改了N种设置……也没搞定。

再次翻出论坛帖子仔细看，我发现Franco的是两头都是RS-232C的电缆，直接连电脑的RS-232C接口。但 Bob买的是一根RS-232C转USB的电缆， 莫非是转USB之后接口的定义不一样？

于是我从抽屉里翻出来一根旧RS-232C电缆，改造成2-3针交叉的转接头，接上FTDX10和RadioPi…… ***IT WORKS！***

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozzgVD5Q2s96ISPH3N4QJsBibpFklziaJAiaEIrQm5bwIr4Kwic3cvO5WPmy19AeNiaIhnSBXLH3ib3LrQQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

这是多么完美的一天，两个吵架的人都没错，连八重洲都是对的，就我这个看热闹的错了！


