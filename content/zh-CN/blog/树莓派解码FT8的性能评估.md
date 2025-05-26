---
aliases:
  - FT8 Decoding Performance Comparison on Different Raspberry Pi Models
author:
  - BI1EIH
category:
  - Posts
created: 2025-05-26 03:47:33
date: 2020-06-26 22:39:00 +08:00
description: "树莓派的性能究竟能不能满足FT8通联？为此我们设计了尽可能接近实际解码的场景，使用同一套模型对不同版本的树莓派和PC进行了一次FT8解码性能横向大比拼。"
image: "http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozdm43TiaR6zkPmIiaDZdLB2350Esx5QgWU0FnXlfC6q9ZibibTtb1P7SCUp4V26psMHZLtLKngKGXMibg/0?wx_fmt=jpeg"
source: "https://mp.weixin.qq.com/s/3bUMaNmBXHqQhOyfyJyXlg"
tags:
  - FT8
  - radiopi
  - rpi
title: 树莓派解码FT8的性能评估
titleSlug: "ft8-decoding-performance-comparison-on-different-raspberry-pi-models"
updated: 2025-05-26 03:52:25
---


在我们推出基于树莓派的RadioPi懒人包之后，许多OM们都会有这样一个疑问，小小的树莓派的性能究竟能不能满足FT8通联？为此我们设计了尽可能接近实际解码的场景，使用同一套模型对不同版本的树莓派和PC进行了一次FT8解码性能横向大比拼。  

  

## 首先说结论

- **固定/远程/QRO：**
- 首选 **Raspberry Pi 4B 2G内存** 版本
	- 可在开深度解码的情况下基本保证正常通联。
	- 不过 并行信号多的时候可能需要对方重复多次发射。
- **便携/QRP用途：**
- 至少应使用 **Raspberry Pi 3B** ，
	- 不开深度解码（忽略微弱信号），在并行信号小于10个的情况下可以基本正常通联。
	- 并行信号多的时候可能需要对方重复多次发射。
- **SWL用途：**
- 不开深度解码， **Raspberry Pi 2B** 可满足需求。
	- 开深度解码需要3B或以上型号可以保证基本完整解码。

  

## 试验设计


Joe Taylor教授发明的JT65、FT8等一系列业余无线电专用通信协议，通过一系列复杂的信息压缩、冗余和纠错以及分析预测，实现了在弱信号在高噪声链路上的可靠通信，已经逼近了香农定理的理论极限。这种优越模式的复杂算法决定了它比传统数字模式如RTTY/AFSK/PSK31等更严重的依赖计算性能。

以FT8为例，一个完整T/R循环为30秒，其中15秒为接收周期，15秒发射周期。每个周期中实际信号载波时间为12.6秒。

正常收/发工作情况下软件在第12.6秒载波结束时开始进行解码，有大约2.4秒的时间进行解码，并作出下一个15秒是否要开始发射的准备。

因为FT8大多数情况下是对0~3kHz音频带宽中所有的信号解码，因此并行的信号越多，解码速度就会越慢。通常情况下信噪比高的信号会较快的解码出来，而信噪比低的信号会花费较长的时间。 **如果在2.4秒内无法解码，解码进程仍然会继续运行，如果整个解码过程在15秒内完成，还可以赶上下一个发射周期。** 如果过长时间无法解码，对方可能失去耐心而Halt TX。

所以要实现比较正常的通联， **理想情况下一个周期内大部分信号的解码不应超过2.4秒。** 弱信号需要的运算量更大，更快的CPU有利于对弱信号深度解码。

为了能有一个稳定的基准，我们选择了WSJT-X记录下的真实接收到的分布在一天内不同的时间的12个信号片段，均为.wav文件。每个文件所包含的FT8信号从3个到21个不等（接收设备为IC-7300，滤波器带宽3.2kHz，简易阳台天线，20米波段），使用WSJT-X 2.2.2内置的jt9解码引擎（与图形界面后台调用一致）。

每种硬件均运行如下两个测试用例。

  

### 用例1、使用标准解码深度，对全部12个信号片段进行解码的平均时间

  

首先，使用以下命令，对所有12个信号片段，进行解码。

```js
~/ft8_samples $ jt9 -8 -d 1 *.wav
```


![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozdm43TiaR6zkPmIiaDZdLB23icDVrG2Dic7z0eWEzH8fJiboAF1LgiakyHFP2eSPfnC8KkvZkURNBR10ZQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

上图：使用命令行对12个信号片段进行解码  


执行完后目录下会生成一个timer.out 的汇总文件，红圈中的数据就是我们需要的解码总时间。这个数值除以12得到每片段的 **平均解码时间** 。


![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozdm43TiaR6zkPmIiaDZdLB2353200ftaT8rJicPzTqJ4LUWZ6Q9AK5JxFqyHSJr0lj2fMj6h9TtibRUw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

上图：查看12个信号片段的总解码时间
  
### 用例2、对并行信号最多的单一片段，进行深度解码

首先删除上个用例生成的解码预测文件`jt9\_wisdom.dat`：

```js
~/ft8_samples $ rm jt9_wisdom.dat
```

然后对信号片段`200614\_153000.wav`执行深度解码：  

```js
~/ft8_samples $ jt9 -8 -d 3 200614_153000.wav
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozdm43TiaR6zkPmIiaDZdLB23TbIK8JmjRkcK9WrqgQA2uwndtfx7E7LJCeMtOXN76jYEm6PFomgRGg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

上图： 使用命令行对单段信号片段进行解码

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozdm43TiaR6zkPmIiaDZdLB23ouyfrszNLLVMJibw3rWfh4Gibk5JibwEGDK6M6Oqj0AkuJS2gQWfHdlug/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

上图：查看单段信号片段的总解码时间

## 试验结果汇总
  

我们一共测试了：

- 五个树莓派的型号。
- 以及两个Thinkpad型号，作为对比参考。

  

以下是测试结果的图表汇总。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozdm43TiaR6zkPmIiaDZdLB23Uo99Fia4ScQPgb8NvoeJpMFoMPYic4U5q4Mh88Ah8o8XTbf2Q8WTWFnA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

上表：各型号对FT8解码的性能汇总(单位：秒) ，其中单段深度解码的21个，表示解码出21个呼叫。

  

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozdm43TiaR6zkPmIiaDZdLB23ZvZsyeEQxJ2cXeb4pqZicNRWjpRPDksUr2NuwAUT2KJ9MFQqWbvoPtA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

上图：各型号对FT8解码的性能对比(单位：秒)。  
注： 统计条形图越长，说明所消耗的时间越多，越不适合用于FT8解码。

  

可见对于标准解码来说，树莓派 4代B型2G内存版是很合适的。4G内存版的性能已经不亚于Thinkpad X61，略逊于Thinkpad X280。

  

我们手边没有树莓派3B+，对它暂时没有结论。不过我们把测试的12个信号片段样本上传到了https://radiopi.club，有兴趣的朋友可以下载去自己测试一下。

  

### 下载地址

[https://radiopiclub.github.io/downloads/ft8_samples/ft8_samples.tar.xz](https://radiopiclub.github.io/downloads/ft8_samples/ft8_samples.tar.xz)

`SHA256:df20f47858ee8c28cd2c722d46c9963dc4e7d0b4fe3edff1610d5ba5ff7d2420`


  

73  

BI1EIH

2020.06.26

