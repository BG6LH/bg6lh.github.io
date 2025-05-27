---
aliases:
  - 'FAQ: Two Questions About RadioPi Sound'
author:
  - BG6LH
category:
  - RadioPi
created: 2025-05-25 03:50:02
date: 2020-06-15 14:56:00 +08:00
description: "RadioPi发布以来关于“声音”的两个问题被问到的最多：手机上VNC能听到RadioPi的声音吗？RadioPi发射FT8的时候能播放声音吗？现在一起解答一下。"
image: "http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxhAh1Kr0cIjcxvj2GicNlfxQplQNxN96mlewQAKO6oX0nrKB1UOv5cd1gUgz8IvwrQMIqYXicK5QcQ/0?wx_fmt=jpeg"
source: https://mp.weixin.qq.com/s/c19-NKyaEJcmDibe3KSStA
tags:
  - FT8
  - radiopi
  - VNA
title: FAQ：关于RadioPi声音的两个问题
titleSlug: faq-two-questions-about-radiopi-sound
---

RadioPi发布以来，关于“声音”的两个问题被问到的最多：
  
- 手机上VNC的时候，能听到RadioPi的声音吗？
- 如何让RadioPi发射FT8的时候也能播放声音？

  

我们这里一起解答一下：

  

## 1，如何通过VNC听到RadioPi的声音？

我们的回答是，**手机上目前是听不到的。**


VNC的确可以“传递声音”。但这是“专业版”和“企业版”用户才享有的功能。而且这个功能在iOS或android手机的VNC Viewer上目前还不能用。其它不能用的情况还包括：在MacOS版本的VNC Server上不提供，使用“即时支持(Instant Support)”时候也不能用。

或许未来某天就可以用了也未尝可知，感兴趣的话可以关注RealVNC公司的相应服务： [https://www.realvnc.com/en/connect/audio/](https://www.realvnc.com/en/connect/audio/)
  
  

## 2，如何让RadioPi发射FT8的时候也能播放声音？

关心这个问题的用户，出发点大多是需要“监听”WSJT-X是否正常发射。


在RadioPi上，这需要把PulseAudio服务设置为：同步把声音播放到多个声卡硬件。 推荐大家简单地使用PulseAudio参数 (PulseAudio Preferences) 工具 ，模拟一个同步输出(Simultaneous Output)的设备即可 。
  
在 20200605版本的RadioPi镜像里 并没有添加这个 工具 ，需要大家自己手动安装。 这里简述一下安装步骤：

### 第一步：安装 paprefs

点击屏幕左上角的“LX终端”（那个小黑窗户），在终端命令行窗口里，输入：

```zsh
sudo apt install paprefs
```

根据提示完成paprefs安装。

### 第二步：添加模拟的虚拟输出设备

在RadioPi屏幕左上角的开始菜单-首选项中打开PulseAudio属性。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoxhAh1Kr0cIjcxvj2GicNlfxKe8CDYZaibnQnMrYHn3kGyia7EhKDV4s8LSZkO8oAz0xvd37HibRsp3Fw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

打开第四个标签页“Simultaneous Output(同步输出)”，选中“在所有本地声卡中为模拟输出添加虚拟(V)输出设备”前的对号。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoxhAh1Kr0cIjcxvj2GicNlfxySicJPH55k8icedxiawpmPmVDL6UibibSibJbNXCKcpEPC4J2yvsRShtSZ7Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

### 第三步：在WSJT-X中增加选中模拟的输出设备

在WSJT-X的文件菜单里，打开“设置/音频”，在声卡的输出设备中，你会看到多出来一个叫“combined”的声卡设备，选择它。在JTDX里也一样。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoxhAh1Kr0cIjcxvj2GicNlfxc6Yl17ZvIYduGAgjubIpQicchBibTCPPSicepY2fJ0EicibZiaYEBibrgQAYw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

现在，可以尝试去WJST-X中发射一个“调谐(Tune)”信号，此时，从RadioPi的3.5mm音频插孔或者HDMI设备上，应该能听到WSJT发射的声音。

> [!NOTE]
> 注意，WSJT-X的设置/音频中要保持声卡原来的“输入”设备不变。因为paprefs并没有模拟一个音频输入的虚拟设备。此外，音频输入是否正常，通过观察WSJT-X的频谱瀑布即能判断，也不需要用耳朵听。 
> 

我们还是建议大家，在使用数字模式时养成看频谱的习惯，并通过观察软件显示的指标来判断问题所在。

修改于 2020年06月15日

