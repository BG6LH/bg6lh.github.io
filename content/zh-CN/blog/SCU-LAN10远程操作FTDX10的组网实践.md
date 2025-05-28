---
aliases:
  - Setting Up the SCU-LAN10 for  FTDX10 Remote Control
author:
  - BG6LH
category:
  - Ham Shack
created: 2025-05-27 07:28:12
date: 2022-11-17 09:37:00 +08:00
description: 我部署了一个SCU-LAN10和SCU-17支撑的FTDX10远程操作网络，达成了实时电台监控、SSB、FT8、自动日志，真是相当开心。
image: https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyUV6zjy1Wfr8M4T4IqOGnCcVdUdT9mz9nKVhgr7ZV1OawaqjAicQ7PjxTUNQTFT226BB9GwooqRWA/0?wx_fmt=jpeg
source: https://mp.weixin.qq.com/s/AfPvxMBo1MzaWMYA3H0gEQ
tags:
  - FTDX10
  - SCU-LAN10
title: SCU-LAN10远程操作FTDX10的组网实践
titleSlug: setting-up-the-sculan10-for-ftdx10-remote-control
updated: 2025-05-27 07:51:55
---

我的FTDX10和天线都在ON80fa，平时大部分时间住在`OM89hu`，工作在`OM89it`，还经常出差，一年到头FTDX10没开过几天，[就这还烧了两次功放](http://mp.weixin.qq.com/s?__biz=MzI0NTgxNDI0NQ==&mid=2247484186&idx=1&sn=4587a8e29c3f55153ac5b67853325061&chksm=e9498590de3e0c8619b3b1453bd1a61daffce85117634f64ca09453121ec6184ee09314808cc&scene=21#wechat_redirect)。为了解决远程摸黑儿操作这个痛点，我部署了一个SCU-LAN10和SCU-17支撑的FTDX10远程操作网络，达成了实时电台监控、远程参加了CQWW SSB比赛、还能继续远程FT8、自动日志，真是相当开心。

SCU-LAN10是八重洲专门为SDR架构的收发信机推出的网络控制模块，支持FTDX10、101D、101MP，以及新出的FT-710。真是SDR时代来了，频谱数据可以在网上到处飞了。

  
## 使用体会

![用SCU-LAN10软件观察7MHz业余频段全段的频谱](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyUV6zjy1Wfr8M4T4IqOGnCQkicxhEFWbkS8yemaYGGKuCLOpytnmB4HKEhyXA6icEIibPcT7xL2XK6w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

SCU-LAN10（它的硬件软件都叫SCU-LAN10）是个相当不错的远程电台操作、监控系统。它可以实时呈现FTDX10当前的所有状态，尤其是那些非常重要的：
- 天调开关、驻波、功率、ALC、VFO-A/B切换、Split状态；
- 最重要的，还有声音和频谱；
- 它几乎覆盖了FTDX10里的所有功能，至少业务操作该有的全有；
- 新的固件还支持了远程关机；
- 比起FTDX10外接显示器提供了更丰富的操作界面；
- 在电脑的大屏幕上可以直接操作3D频谱，如果是配合FTDX101则有两个频谱窗口可用，信息量巨大；
- 它还支持鼠标操作，选择各种功能参数，拨动鼠标滚选频，快捷直观。终于不用小心翼翼地躲开大拨轮，在一堆旋钮和按键里找功能了。
- SCU-LAN10提供了远程的SSB通讯的能力。你可以按着电脑的空格键当PTT，或者打开VOX直接对着电脑呼叫。今年的CQWW SSB比赛，我拿它远程扫地搞了69个QSO。顺便说，比赛时3D频谱选频其实并不是很实用。还是2D的频谱容易准确定位。

小遗憾的是：
- 时至今日SCU-LAN10只支持**SSB话**业务的全功能收发。
- CW只能收听，且没有解码功能。
- FT8、RTTY、SSTV这些操作则完全不支持。至少不能靠SCU-LAN10直接的功能实现，只能寻找别的解决方案。

为啥不给CW、Digital的全功能发送？有人猜测是网络延时会影响CW开关信号的准确性，听起来有点道理。可是SCU-LAN10又提供了丰富的CW相关功能，比如ZIN、APF、CW Pitch甚至WPM速度设定。或许未来的固件升级会逐步打开一些新功能？SCU-LAN10似乎是正在演进中的产品。
  

## 远程组网策略

由于SCU-LAN10占用了FTDX10上唯一的USB CAT端口，以前比较成熟的***台站侧值班电脑*** + ***远程桌面软件***实现的远程控制也不行了。破题思路只剩下利用FTDX10机器上空闲的R-S232C和RTTY/DATA接口，实现第二组“USB串口+声卡”通道。**这时SCU-17成了首选**。

> [!tip]
> FTDX系列机器上还有两个USB-A的端口，那是给键盘鼠标用的，没有音频IO，也不能做CAT控制，估计电流不会超过500mA，或许可以接个LED台灯或者呼号灯牌啥的。
>

安装SCU-LAN10，并不像买个天调接上那么简单。想用上它至少得有点网络管理的经验，知道怎么设置IP地址，什么是端口转发，这涉及到安装和日后使用。想完成跨局域网的远程操作还是有相当的技术门槛。在这里我只分享一下我的基本解决思路，供大家一起讨论。详细设置请参考说明书。
  

## SCU-LAN10和SCU-17实现远程操作的组网方案

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyUV6zjy1Wfr8M4T4IqOGnCDn7lsKicibciasRXqJmNibZoN6micVW8gmSID1KbRLIsyluvZKoJjmwKYNg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

这个方案需要SCU-LAN10、SCU-17和两台电脑，直接组成了通过互联网的远程操作方案。

- **红色线**是SCU-LAN10的连接方式；    
- 在台站之外，**电脑A**通过互联网连接到SCU-LAN10，实现监控、操作FTDX10的目标；
- **绿色线**是SCU-17的连接方式；
- 它在台站侧，和收发信机、电脑B，保持物理连接；
- 在台站侧的电脑B，运行各种HAM软件，比如FT8。
- 在电脑A、B上，安装远程桌面软，实现从电脑A上操作电脑B上的各种HAM软件。
- CW怎么办？我还没实验过，后续再探讨吧。  

敲黑板，下面说几个要点：

### 连接 SCU-LAN10 的步骤
1. **SCU-LAN10联网**
	- SCU-LAN10是个固定IP设备，而且只能通过IP地址访问。所以设置前要先把自己电脑的IP，改成跟它出厂预设的IP地址（192.168.49.1）在一个网段（比如192.168.49.73），然后就可以用YAESU提供的设置软件，直接登录进去了。
	- 通过一根网线，把SCU-LAN10和家里的路由器下行接口（LAN口）连起来。你可能不得不把一个Wi-Fi路由器摆到它附近。
	- 一般的Wi-Fi路由器，使用的是动态分配的IP地址，要确保给SCU-LAN10预留一个固定IP地址。这要看路由器的说明书。
	- 如果要从台站以外访问SCU-LAN10，还需要记得打开路由器的防火墙，把50000～50003四个UDP端口，转发到SCU-LAN10的固定IP上去。
	- 从外部访问台站上的SCU-LAN10，还需知道自家的公网IP地址。有些路由器提供手机管理软件，可以查询到家里最新的IP地址；也可以琢磨在家里部署一个虚拟专网。
2. **把随机提供的USB CAT线、ACC线接到收发信机后边的相应接口。**
	- FTDX系列提供了一个13芯的ACC接口，看起来它是传输电台状态数据的，并给SCU-LAN10供电的。电台控制、音频数据、频谱数据则是通过USB完成的。
	- FT-710没有ACC接口。数据采集、收发信机控制、音频传输、频谱数据完全通过USB实现，但是需要给SCU-LAN10加一个12V电源。 

连接SCU-17相对简单，把随机提供的USB CAT线，RS-232C电缆，DATA电缆，跟FTDX10背面对应的接口连接好。但是有两个重要的提示：


### 连接SCU-17的要点
- **没有声音输出？**
	- 刚连上SCU-17，直接发射可能没有音频输出，调整SCU-17的音量旋钮也不行。这可能是因为收发机上的DATA模式选择了USB。因为SCU-17是从DATA接口获取的音频，应该把收发机的切换到DATA。设置路径是  
- **功能菜单：Radio Setting > MODE PSK/DATA > REAR SELECT = DATA**
	- 由于FTDX系列的新固件附加了一组**“PRESET”**预设值（主要针对FT8等DATA模式）。它把相应的设置预存好了批处理一下，切换到DATA模式就启动，切换其它模式再恢复之前的设置。“PRESET”是给收发信机上的主USB接口设计的，它默认会把REAR SELECT换成USB。
- **莫名其妙的自动发射？**
	- 在电脑开机时，接了RS-232C电缆的收发信机可能会有几秒钟处在发射状态。我猜或许是因为电脑启动时串口初始化会上电，此时触发了RTS发射。
	- 你可以关掉RTS。“PRESET”预设的 CAT RTS 就是关闭的。
	- 手动关闭收发机 CAT RTS 的路径是：  
		- **功能菜单：Operation Setting > General > CAT RTS = OFF**
	- 但是关掉它会不会不影响其它玩具？比如fldigi发射CW？这些要以后慢慢研究了。

  

好了，关于SCU-LAN10和SCU-17部署上的坑，基本上就这些。

  

### 必须用SCU-17吗？

**当然不是**。熟悉数据盒子的人自然知道要怎么做。心灵手巧的无线电老中医也可以自己DIY接口电缆、音频线，实现和SCU-17同样的能力。我用FT-818ND玩FT8时，还在用自己两年前DIY两根数据线和一个USB声卡。我也买过数据盒子，后来玩烧了。窃以为SCU-17是这些产品里最靠谱的设备。

> [!tip] 通过RS-232C连接FTDX10电台
> 通过RS-232C和DATA接口实现CAT是业余无线电二十年的老话题。如果你的电脑还有RS-232C接口，你可以用一根标准RS-232C电缆直连收发机。现代电脑基本只有USB接口了，这时需要买一根RS-232C转USB的串口线，请注意这种RS-232C接口的2、3针脚要交差。请参考上一篇[《FTDX10使用RS-232C接口CAT操作指北》](http://mp.weixin.qq.com/s?__biz=MzI0NTgxNDI0NQ==&mid=2247484237&idx=1&sn=ee1d4b5b356ed77a9b7aacb50cd1ecc2&chksm=e94985c7de3e0cd1f104ffc7984e5d3c4632afa2845a2f36551434ff5df7487320b7a425e696&scene=21#wechat_redirect)。
> 
> 在QRO和不谐振天线的设备组合上，直接用RS-232C电缆连电脑，有高度的RFI风险。建议选FTDI芯片的工业级电缆，最好再配一个隔离器。DIY的DATA音频线倒是不会有大问题，但也最好缠几圈磁环。
> 
> FTDX10支持101项CAT操作，FTDX101支持105项，通过RS-232C电缆控制收发机，只有一项开关机不支持，其它都支持。
>
  

## 远程控制台站实景

下边这张图就是我的书房远程控制台站，此时是在家里的局域网环境下。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyUV6zjy1Wfr8M4T4IqOGnCmjic2OJH9HibU7q47ghwuxjG9EeVdZMDaicnSqWPG3vsL3O2aKbjAy4ng/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

由于我工作的电脑主要是Mac OS和Linux的系统，所以我部署了三台电脑：

- 一台[RadioPi，在阳台跟FTDX一起做值班电脑](http://mp.weixin.qq.com/s?__biz=MzI0NTgxNDI0NQ==&mid=2247483860&idx=1&sn=706a4c29d4198a667f89a0db5e684c30&chksm=e949875ede3e0e48f9818a0faaa78362e81d1ad60599a916438273a5e7620f0a0ca6842a6c86&scene=21#wechat_redirect)，这张图里看不到它。大屏幕上的JTDX软件，就是从它那边通过远程桌面投射过来的。
- 一台Macbook是我工作时随身带的，主要用来运行远程桌面，查看RadioPi的运行情况。同时运行着RUMLogNG，Mac世界里最好用的日志软件。RadioPi上的JTDX通过UDP端口，把DX提醒、QSO记录传送给RUMLogNG。
- 另有一台Tinkpad X230是专门用来运行SCU-LAN10软件监控电台的。当然X230也可以跑远程桌面，那样Macbook就可以下班了。只是我得找一个在Windows上好用的日志软件。

我尝试过在Macbook Pro 16上，运行Windows虚拟机跑SCU-LAN10。给虚拟机分配了一半的运算力，4个CPU内核、8G内存。但是SCU-LAN10对系统的消耗相当大，没十分钟它自己就挂了。还把Mac给累坏了，风扇嗷嗷转了好久才缓过劲儿来。

下边这张气氛诡异的图就是我神秘的阳台壁橱台站。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyUV6zjy1Wfr8M4T4IqOGnC8EamicFqvXw21o82QvIARKicljISqD0FJmJLlW1Q1YLPmaHHrsZQVORg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

- RadioPi藏在第三层，电源GSV-3000右边，有一个63电报机挡住了它，那个红色的光就是它。
- 第二层是电源线的扼流磁环、SCU-LAN10、SCU-17。
- 第一层是FTDX10，驻波表，1973年的常熟K4手键。

  

## SCU-LAN10的最佳应用场景

SCU-LAN10的最佳应用场景应该还是在局域网，要不怎么叫“LAN10”呢。当电台收发信机不适合放在书房，或者没有一个舒服的操作位置时，这玩意儿大幅提升了操作体验。还节约了几十米电缆，降低了RFI治理成本。

当把家里的局域网跟公共广域网打通之后，还可以在更远的地方操作。虽然难免会有延时，但还能接受，用来收听、监控设备状态还是没问题的。

  

## SCU-LAN10的延时能有多大？

我在局域网环境下做了个对比实验。结果感人！

- 在安装了SCU-LAN10软件的ThinkPad X230上，把电脑音量开到最大；启动WSJT-X v2.54软件，对操作系统麦克风收到所有声音信号解码，所以信噪比就不用比了，只看延时。
- 在阳台的值班电脑RadioPi上，也运行着WSJT-X v2.54，通过远程桌面观察解码结果。
- 对比两个窗口解码出的相同信号，查看延时的情况。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyUV6zjy1Wfr8M4T4IqOGnCESPckicLoyYaacUx48L8ib0ibWNcKoqDndk2iaB9MFM9KELTn6DEFagQtg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

通过局域网传到SCU-LAN10软件的信号比FTDX10上的信号慢了0.8秒！这是有点头大了。再慢点WSJT-X就不解码了。可能这会儿家人在刷手机视频吧，早先看才0.3秒左右。

我的SCU-LAN10硬件连的是百兆交换机，X230连的是百兆无线网，看来是时候考虑全屋的千兆网升级、VLAN优化了。

  

## 关于SCU-LAN10的一些期待

### 推测一下SCU-LAN10的软件架构
 
SCU-LAN10是一个封闭的软件架构，而且只支持Window操作系统。一般来说，如果想在跟SCU-LAN10的同一台电脑上实现CW信号传输，应该依赖SCU-LAN10提供的软件API接口、或DLL动态调用库，或者SCU-LAN10直接兼容最通用的标准软件库，比如Hamlib。可我在Windows里翻了翻，没看到它跟Hamlib这类软件库有关联。说明这很可能是YAESU自己开发的一套黑盒应用。QST杂志研究说，或许可以通过在Windows上改变声卡配置，把音频分享给类似WSJT-X这类软件，再通过SCU-LAN10的VOX方式发射。这听起来应该能实现，但是VOX不太靠谱啊。所以目前各种常见的HAM软件，比如WSJT-X、N1MN、WINTEST、RUMLog，fldigi这些，基本没法跟SCU-LAN10一起用。

可以研究一下SCU-LAN10的网络数据传输接口。它依赖50000～50003这四个UDP协议端口，依次传输控制、CAT、音频和频谱数据。如果有人能从这一层截取数据，并做成开放接口，倒是一个有趣的破题路线。总之，还是期待YAESU能主动开放软件接口，提供给HAM世界更多的可玩性。
 
### 关于SCU-LAN10的接口猜想

SCU-LAN10上还有一个RS-232C接口，我曾尝试用RS-232C电缆代替USB，接到电脑上看看会有啥反应？结果是SCU-LAN10报错，说没找到USB，必须用USB。但是它的确识别出来了有RS-232C设备接入。

我还发现最早出厂的SCU-LAN10带有一个音频输入输出的接口，但是新出厂的产品，这个接口取消了。打开盒子看电路板，那里还有一个4脚的Audio插座的位置。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyUV6zjy1Wfr8M4T4IqOGnCaBE1iaYia11I4pRo7HIUrpGkD5zQKgsaZJz6NpWEDhic00zAk1Tg30XRA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

右下角就是音频接口的位置

不知道YAESU葫芦里卖的什么药。莫非是用来配合值班电脑实现DATA模式？**如果你手边有老的SCU-LAN10，可以试一试哦！**

  

## 如何实现远程CW？

上边分析过了，这个路径可能还得依赖值班电脑上的软件，比如fldigi通过RTS发CW。如果想在本地操作手键，控制远端的收发机发射，有一个思路跟大家探讨：

- 首先要组好一个“鲁棒性佳”的虚拟专网，要靠谱，比如千兆有线局域网。
- 值班电脑B上运行Hamlib Net rigctl，把FTDX10虚拟成一台网络电台；
- 然后在本地电脑A上，通过Winkey这类软件，连一个K3NG这类keyer，再连手键、自动键。

等我把BG6JJI的K3NG套件完成了就试试这个思路。如果你已经知道这一条弯路，请告诉我。  

这些年YAESU的产品作风一直很保守，世人有目共睹。它好像把电台当钢琴来做了，带着一身老工匠的矜持，闷头打磨一台古典乐器。SCU-LAN10好比给钢琴加装了个蓝牙模块，可以用Pad示谱，增加了练习的趣味性。可是竞争对手直接在量产数字钢琴了。或许YAESU能想明白，尽快给SCU-LAN10软件开放接口，让大家玩的开心。它再不搞，ICOM、Flexradio、Elecraft就搞出来了。  

  
## 相关资料

- [QST杂志SCU-LAN10的评测，2021年5月](https://static.dxengineering.com/global/images/technicalarticles/ysu-scu-lan10.pdf?_gl=1*1em267r*_ga*MTM4NTA4NDI3MS4xNjUyOTc3NTIy*_ga_NZB590FMHY*MTY2ODYwNjg4Ny43LjEuMTY2ODYwNjkxMi4zNS4wLjA)
- [YAESU SCU-LAN10安装手册](https://www.yaesu.com/downloadFile.cfm?FileID=16693&FileCatID=158&FileName=SCU%2DLAN10%5FInstallation%5FManual%5FENG%5F2012%2DB.pdf&FileContentType=application%2Fpdf) 
- [YAESU SCU-LAN10操作手册](https://www.yaesu.com/downloadFile.cfm?FileID=16690&FileCatID=158&FileName=SCU%2DLAN10%5FOperation%5FManual%5FENG%5F2012%2DB.pdf&FileContentType=application%2Fpdf)
- [YAESU SCU-17操作手册](http://yaesu.com/jp/manuals/yaesu_m/SCU-17_OM_ENG_JPN.pdf)

