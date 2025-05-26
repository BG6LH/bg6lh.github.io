---
aliases:
  - Setting Up Chrony and GPSD for RadioPi
author:
  - BG6LH
category:
  - Posts
created: 2025-05-26 03:57:56
date: 2020-07-05 20:28:00 +08:00
description: "在野外通联、没有互联网的情况下，你可以使用一个廉价的USB的GPS，来提供一个GPS时钟，并由chrony负责和它对时。"
image: "http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHowj0Sic6B4qR6wqic7EPs5RLF4QNaz61COyBXkLBUg91zAMLSzvkCFzykUiady3VGjBWtAW9cOV8xsgA/0?wx_fmt=jpeg"
source: "https://mp.weixin.qq.com/s/CIC2s_TMSHdaFZWs39sNYg"
tags:
  - chronyd
  - gpsd
  - radiopi
title: 给RadioPi添加USB GPS
titleSlug: "setting-up-chrony-and-gpsd-for-radiopi"
updated: 2025-05-26 04:01:42
---


众所周知，WSJT-X解码对时间的精度要求较高，而树莓派本身不带硬件时钟。 为了使WSJT-X能获得精确的时间，我们给 RadioPi预装了chrony。这可以使RadioPi通过互联网获得准确时间。此外，我们还预装了gpsd，你只需购买一个廉价的USB GPS，做一点额外的配置，即 可以获得更精确的GPS时间，同时还使RadioPi具备了卫星定位的能力，一举两得。

  

RadioPi使用chrony替代nptd执行时间同步。 在有互联网连接时，chrony可以从支持ntp协议的网络时间服务器获取时间； 没有互联网时，比如在野外，chrony可以从USB GPS获取时间。 以下是一个简明的配置 操 作说明。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHowj0Sic6B4qR6wqic7EPs5RLFfu6OX2uQmMqmpTNdEyTBse8CBibTiakbIYTWv6P14uWo3ExDHrQicWLAg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

  

## 第一步：设置USB GPS

  

给RadioPi插上USB GPS，开机后，打开终端(Terminal)窗口，通过以下命令找到RadioPi系统给GPS分配的串口ID。

```zsh
ls -l /dev/serial/by-id
```

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHowj0Sic6B4qR6wqic7EPs5RLFP4yqfKZF9z2exInlWCkQILusl7OgaiaJVDWheOXunrpXdhGe0vtBMfg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

上图：列出所有串口设备的ID

  

本例中可以看到我们的GPS被分配的串口ID是 `ttyAMC0` 。

  

记住这个编号，然后打开gpsd的配置文件：

```zsh
sudo nano /etc/default/gpsd
```

  

按照以下内容，修改相应的设置：  

```zsh
START_DAEMON="true"
USBAUTO="true"
DEVICES="/dev/<你的GPS串口ID>"
GPSD_OPTIONS="-n"
```

  

DEVICES这里要写入你查到的具体ID。本例中要写入`ttyAMC0`。然后 按Ctrl-X，保存修改并退出。

  

  

## 第二步：给chrony添加GPS授时服务

  

接下来把GPS时钟添加到chrony中。

  

打开chrony的配置文件。

```zsh
sudo nano /etc/chrony/chrony.conf
```

  

在文件末尾添加下面一行。

```zsh
refclock SHM 0 offset 0.5 delay 0.2 refid NMEA
```

  
按 Ctrl-X，保存修改并退出。



## 第三步：重启RadioPi

  

退出终端(Terminal)窗口，重启RadioPi。

重启之后，可以按照以下命令检查一下gpsd和chronyd是否正常运转。

```zsh
systemctl is-active gpsd
systemctl is-active chronyd
```

  

得到反馈 `active`，表示gpsd和chronyd已经正常提供服务了。  

  
