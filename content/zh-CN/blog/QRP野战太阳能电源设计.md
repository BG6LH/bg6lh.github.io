---
aliases: "Portable Solar Charging System for FT-818 QRP Transceiver"
author:
  - "BG6LH"
category:
  - QRP
date: 2019-08-09 08:07:00 +08:00
description: "我给FT-818设计了这样一套野战浮充供电系统：一个7AH的胶体铅酸蓄电池，一个27W的折叠太阳能电池包"
image: "http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozbKcHYtbjXF1IibYI3BM8QRicprZ2MwwWsWjscYzagXqaMDibFfzk2icVU6lngsFvTV76OHJgJhpicpww/0?wx_fmt=jpeg"
titleSlug: portable-solar-charging-system-for-ft818-qrp-transceiver
source: "https://mp.weixin.qq.com/s/DaX0D_5J-NJIbqaXYt-MFg"
tags:
  - FT-818
  - FT-817
  - 太阳能
  - QRP
title: "QRP野战太阳能电源设计"
---


我给FT-818配置了一套野战用的太阳能浮充电源系统：

- 一个4AH胶体铅酸蓄电池给电台供电
- 一个27W太阳能电池折叠包，给蓄电池浮充补电；
- 一个数字伏安表，做太阳能电池的充电监测。

以下是整个系统的设计图：

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozbKcHYtbjXF1IibYI3BM8QR5Dv3LfLpicYdy6IfWiaDeDibL7oNPyV9ibT7zXbWEThKEMczMAZG8tlM7w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

- 太阳能支路上增加了一个防返流的二极管；
- 电流表也在这里，监测着向蓄电池充电时的电流；
- 负载支路上增加了一个5A的保险丝，以保护电台。
- 电压表在监测整个系统的电压。


## FT-818对电源的要求

我最初的设想是，一套 **简单、便宜、安全** 的电源，应付野外工作一个白天，别太沉。所以首先要确定FT-818对电源的要求。

FT-818英文版的手册上讲的很清楚：

- 电压13.8V正负15%，可以工作在8V～16V的电压上；
- 接收电流：450mA，静噪启动后大约250mA；
- 发射电流：HF和VHF是2.4A，UHF是2.7A。

FT-818是6W的机器，比FT-817大了20%呢！所以FT-817对电源的要求要稍微低一点。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozbKcHYtbjXF1IibYI3BM8QRHhlGGBa0dvU7B8OUmB7icibv0KXBXcyM0nZAdMuPOMreJCHz5ibnSDRWA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

  

## 12V/4AH胶体蓄电池

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozbKcHYtbjXF1IibYI3BM8QR4zLiabz1LJCKLhYIFc4YESRfB6yIwUS0q2kUUN41ICjnm0GMMcyZG0Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

- 胶体蓄电池优点是：充电时不需要稳定的电压和电流，放电时却可以持续稳定放电。缺点是重，4AH这个重达1.3kg。
- 4AH的电池大约可以满足FT-818持续发射2个小时不到。即便是玩数字模式，占空比将近50%，也能持续玩3小时以上。
- 一定要买不间断电源用的那种蓄电池，千万别买汽车用的启动电池。启动电池放电电流好几百安培。
- 我买的胶体蓄电池，最大充放电特性是180瓦/5分钟，也就是可以干5分钟15A的大电流。安全起见，各支路上安装了5A的保险丝。
- 胶体蓄电池充电电流在0.1C之内都不用担心过充。C表示蓄电池容量，4AH的0.1C就是400mA。如果充电电流最大不超过这个，那就算是安全的了。实际效果，充电电流最大看到过450mA，尚可。

  

  

## 12V/27W的太阳能电池板

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozbKcHYtbjXF1IibYI3BM8QRJ4rZHNs7As6XG8HJ1vpUrKrVj4NLQqUn55CqQiacMpGXicJywjS1J6cw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)


- 淘的某厂家半成品，100元上下
- 12V输出，开路电压标是18-20V
- 单晶硅材料， 转化效率 17 ～18%
- 标称最大功率 27W(转化后)
- 工作温度-17°到48°，自重1.5kg

### 简单说下太阳能电池的特性：

- 当太阳能电池没挂负载时，两极的电压是最大的，这是它的 **开路电压**
- 当负载的电流逐渐增大，太阳能电池的电压会下降，直到降到0
- 如果太阳能电池板短路了，那么两极之间就没有电压了，这个最大的负载电流就是太阳能电池的 **短路电流**

  

有兴趣的可以读一下文末推荐的TI的一篇文章，它设计了一个太阳能的锂电池充电器，同时还介绍了太阳能电池的等效电路、伏安特性。

  

这个标称2 7W太阳能电池，它的最大电流应该可以干到2A上下，2A充那个4AH的电池还是有点玄乎的，所以还要做一个伏安表监测。如果电流太大，把太阳能板遮一下就好了。实际 跟FT-818和蓄电池一起 实验，在HF波段，太阳能支路的电流还没有超过500mA的情况。

  

太阳能充电系统一般都要设计一个最大功率跟踪电路，就是充电管理模块，以保证输出一个稳定的电流和电压。但我没有搞这个模块。因为胶体蓄电池本来就有比较耐折腾，直接冲就好了。

  

### 为什么不选锂电池

锂电池轻便，但是贵，而且还需要而外的充电管理模块，浮充的时候是否有干扰也不好保证。

## 数字伏安表DSN-VC288

为了让这一切显得靠谱，还是要监控一下充电的电压和电流。于是我买了DSN-VC288。网上搜“数字双显电流电压表”最便宜的那种就是它。这玩意儿满世界都是，似乎外国人玩的比国内还明白，有人都反向出来了电路图。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozbKcHYtbjXF1IibYI3BM8QRqaIlw8q9xhtQRqL85ia1sibWvlVOw9mUhnNfKkskbDEAQpw6sX8T6hTw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozbKcHYtbjXF1IibYI3BM8QRgzgwaAvefqOA5NT5mxqS1CgamdOOHGSFbRSBUtnXNzZic3slrE1RLNQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxr2zM6eiaZPXsKOhoicvW5d3hXR0VJ5wCqsbESWGJ1dfV9yZhHUMuFQITFv2ZibMDibdMGutNCv5pNbw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

- 买量程100V/10A足够了。太大的还得接分流器，影响QRP系统的便携性和精确性。
- 接线图就不再啰嗦了，注意，买的版本不同，接线方式也有不同。
- 这个表有校准的螺丝。但我没有校准。

  

## 安全用电

整个系统工作的最大电流是蓄电池的短路电流，能高达15A以上。所以：

- 各处要防止意外短路，加入至少5A的保险丝。
- 电源线耐流也要高。我选的是AWG12#的硅胶线，15A的。


此外，当太阳光照不足的时候，还要防止蓄电池给反向给太阳能电池“充电”。 所以我给太阳能支路加了一个防返流二极管： 1N5824，5A/30V整流二极管。 图省事，安装在伏安表的盒子里了。  

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxr2zM6eiaZPXsKOhoicvW5d3L4uxSwy96d6vPKqtRlaKUxR4fK8rULFu2tBJQWb0sQiaChPxthsFwYQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

  

### 3D打印的安德森4路电源分配器


我一直在用Anderson PP15-45系列的插头，安全方便。所以我设计了一个3D打印的安德森4路电源分配器，有兴趣的可以去thingiverse.com上，下载我设计的打印文件。文末有下载地址。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozbKcHYtbjXF1IibYI3BM8QRXwiaPw0uMLCOGhKiau570k0MaxVibsTXUDnopC7FT6XBAZRS5kx0VSI0w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

## 实际使用效果

刚刚的7月底8月初，我在北戴河(OM99pp)呆了一个星期，做了三天的通联实验。用的设备是FT-818、小环天线、Pac12天线，最大发射功率6瓦，FT8模式，发射占空比比较高，但不是持续在玩。

### 第一次实验：

  

- 7月30日，晴朗的下午2点，太阳能板开路电压20V+；
- 接蓄电池和FT-818以后，伏安表显示，充电电压维持在13V上下，电流150-220mA之间；
- 一直能坚持到下午四点多，电流还是100mA以上。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozbKcHYtbjXF1IibYI3BM8QRzU1CDFoNr9V6Y7CreDBp3qicNQZAcuW78st1l2VzA8dTe2tnZTLZUtA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozbKcHYtbjXF1IibYI3BM8QRdNYzt8uibibhJeQdD9ibyul5BnvXlTmoWHibu7s4Eg56UUsAFeUCN4YKMQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

  

### 第二次实验：
  

- 8月3日星期六，早上在海边用FT-818和Pac12天线，玩了一个半小时的FT8。没有带太阳能，全靠蓄电池。发射频率比较高，电池电压下降到11V左右。
- 下午两点多接上太阳能充电，边充边玩，此后一直接收到6点半左右，没太阳了，伏安表显示电压降到了7.5V，FT-818显示7.2V。
- 晚上用充电器给蓄电池充满电。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozbKcHYtbjXF1IibYI3BM8QRkRPBW2y3lGFUMouVfCGGDII61IVkzQTXqBhrEwKeLpT0Nm6AsibS6JQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozbKcHYtbjXF1IibYI3BM8QRVbsUoicV92nb1ArB7hlzItx41V5j8TS7vf9T4HdU4ibbvOA3L3VdPZoA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozbKcHYtbjXF1IibYI3BM8QRCH8iaf1C6LNc5ejeJ1my1Ou0EWdic166hkOdfs3axYvCQQk1IssdNuvw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

### 第三次实验：

  

- 8月4日，一个多云的阴天，太阳能开路电压18V+；
- 头天晚上把电池充满了，上午接上太阳能电池和FT-818，无论是发射还是接收，整体电压维持在13V以上，电流在300～400mA上下。
- 下午四五点以后没有足够的光照，断开太阳能。持续接收，零星发射。
- 到晚上10点收摊儿，伏安表和电台的电压显示是11.8V。

（这次忘了拍照了……）

  

  

## 最后的总结

- 玩半天到一个白天，有太阳能同时在浮充补电，这套系统还是足够的。
- 如果想坚持一个高强度的周末比赛，这套系统的容量似乎还是有点小了。
- 如果电池是满电状态，有太阳能浮充补电，可以玩的时间更长。 但 是到了晚上一定要用充电器充满电。 27W太阳能电池 浮充， 只能多维持 一会 儿电量，并不能边 玩边把电池充满。
- 27W的太阳能电池板1.5kg，4AH的蓄电池1.3kg，FT-818 0.9kg，这套系统加一起不低于3.7kg，已经很重了。
- 目前的实验都是夏天，冬天什么样还是未知。
- 还有一些有趣的现象，第一次实验发现发射时表灭了，以为是压降太大，表不工作了。第三次实验发现发射时伏安表偶尔会显示16V电压，电流还正常。分析最大的可能还是发射时的射频干扰影响了伏安表。

  

  

## 参考文档  

- [TI.com - 如何设计锂离子电池充电器，以从太阳能电池板获得最大电力](http://www.ti.com.cn/general/cn/docs/gencontent.tsp?contentId=50707)
- [安德森4路电源分配器](https://www.thingiverse.com/thing:3774171)



