---
aliases:
  - 'FAQ: Could GPIO of Raspberry Pi be used to Control Transceivers?'
author:
  - BG6LH
category:
  - RadioPi
created: 2025-05-25 04:02:48
date: 2020-06-16 09:07:00 +08:00
description: "换个角度考虑，用这个来实现串口控制电台的话，可以做的更经济吗？"
image: "http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxhAh1Kr0cIjcxvj2GicNlfxoHHQ5KCC4Xl8ib2DBPGLNsjz9GoITBAewUfFVNSGHcyfiacnUGaLY8mA/0?wx_fmt=jpeg"
source: "https://mp.weixin.qq.com/s/yW9e3WiPmkjEK1eNsY5v3Q"
tags:
  - radiopi
  - GPIO
title: FAQ：可以用树莓派的GPIO串口控制电台吗？
titleSlug: "faq-could-gpio-of-raspberry-ri-be-used-to-control-transceivers?"
updated: 2025-05-25 04:05:38
---


这个问题经常会被问到。大概因为一方面 商品电台配套的串口控制转接头、线、盒子等换外设往往很贵，另一方面树莓派又恰好有GPIO的串口。理论上讲这的确可以实现的。但是换个角度考虑， 用这个来实现串口控制电台的话，可以做的更经济吗？

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxhAh1Kr0cIjcxvj2GicNlfx5GZ3wmhkwIV4JKffsCLrkNOFILOwHU8JwWtqaAMNzd3GqavvFahOIg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

上图：树莓派的GPIO，来自raspberrypi.org

  

我们查阅了树莓派的官网GPIO说明文档，在一开始它就提到，连接GPIO引脚的电压如果超过3.3V，则有可能会把它烧了。详见：

[https://www.raspberrypi.org/documentation/hardware/raspberrypi/gpio/README.md](https://www.raspberrypi.org/documentation/hardware/raspberrypi/gpio/README.md)

此外，GPIO除了少数几个不可定义的引脚外，其它引脚的输入输出电平都是3V3的，这也包括了GPIO串口的信号收发引脚GPIO14和15。详见：

[https://www.raspberrypi.org/documentation/usage/gpio/README.md](https://www.raspberrypi.org/documentation/usage/gpio/README.md)


反过来看电台上常见的几种串口的电平：

- 标准RS-232C接口(DB9接口)电平：+3V～+25V，或者-3V～-25V；
- Yaesu的ACC接口(mD8接口) 电平： 0～5V；
- Icom的CI-V接口(3.5mm音频接口)电平：0～5V；
- 标准USB接口电平：0～5V。

这基本上都是大于3.3V的电压。

所以，当你思考用树莓派的GPIO去直接控制电台的时候，你首先要考虑的是电平转换。这在成本上已经超出了早已白菜价的USB转TTL、或者USB转232的设备了。


我们暂时没找到GPIO串口直接控制电台的案例。看到过一些控制继电器实现PTT的案例，但这不是串口协议的，无法通过成熟的Hamlib库实现电台控制。欢迎有这方面经验的HAM给我们留言，大家一起交流。
