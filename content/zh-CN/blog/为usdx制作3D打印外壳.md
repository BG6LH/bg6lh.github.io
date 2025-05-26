---
aliases:
  - A 3D Printed Enclosure for USDX SDR
author:
  - BG6LH
category:
  - Posts
created: 2025-05-26 07:23:18
date: 2021-07-04 00:12:00 +08:00
description: "这是一个因为剩了半碟子醋而包了顿饺子的故事……所以前方高能预警本文歪楼会歪的很严重。"
image: "http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxrYOJic04K61yx9BWMyzO42rDoVzRXFIxOcFDvquygcv5Beus7517Ta8JUg1qpWZAduAUlWYmvMicg/0?wx_fmt=jpeg"
source: "https://mp.weixin.qq.com/s/cIHbBCYf2nG3YyjFj7wBrA"
tags:
  - 3D打印
  - usdx
title: 为usdx制作3D打印外壳
titleSlug: "a-3d-printed-enclosure-for-usdx-sdr"
updated: 2025-05-26 07:26:50
---


这是一个因为剩了半碟子醋而包了顿饺子的故事……所以前方高能预警本文歪楼会歪的很严重。
  
话说2021年业余无线电届第一流行的话题，应该是制作usdx套件了(大名叫μsdx），还得再去立创薅趟羊毛、免费打板，顺便采购点零件。u sdx是一个用Adruino Atmega328p 芯片制作的SDR收发信机。 Atmega328某宝最低价6块钱一枚，拜天朝强大的供应链体系所赐。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxrYOJic04K61yx9BWMyzO42GicjrVjcjGphQZ2oH9yzrE8csSPK3bSMAfgXCtVK9zR5TGYB1A0HXMQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

所谓SDR就是“软件定义无线电”，简单理解就是把接收到的无线电信号当数据，纯靠算法和CPU算出有用的信息。这么说其实并不严谨，但是区分“硬件”无线电还说得过去。所以SDR设备一般都比传统的电台电路要简单的多，而且体积很小。 BG6JJI做的衍生版已经小的快赶上一条士力架了，而且还能有5W输出。更可贵的是，因为是SDR，固件还白饶了一个CW解码功能。遇上手法标准的摩尔斯电码老司机，比如7023MHz上那些令人尊敬的通讯老兵，usdx解码几乎一字不错。

  

BI1EIH帮我和BG1TPT各打了一套板，附赠了一堆压箱底儿的零件，还帮忙给焊了贴片芯片。我们三个人分头装完……都没响。有一天晚上三个半导体老中医凑一起会诊，把我的修好了。在7074MHz清晰地收到了FT8信号，7023上完成了解码CW。但是他俩的至今没有救活。

  

我自然很 兴奋，于是打算给我的usdx做一个漂亮的外壳。

  

切入正题：我在网上找到了一个叫“小树”的3D打印机社区。一群清华的学生，基于Prusa i3的开源方案，攒了一个廉价的3D打印机套件。还是那句话，天朝的供应链体系太强了。399一套，可以打印110x110x160立方mm范围内的模型。usdx正好是100x100的。于是我买了一套。等了快一个月，套件小猪佩奇了。抱回家花了两个晚上，组装完成。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxrYOJic04K61yx9BWMyzO42Eem1uSiaCmQdGoA4ictfX1mKkPOsvLE4kXCT7HryX0Bq97NSwnxOE9vQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

3D打印机分好多种，最典型的是“热挤出 式 (FDM，熔融层积成型)”。说白了就是一个高精度的热熔胶枪。我买的就是这种。这机器自己攒有好多坑，不过在社群大佬的文档和视频指导下，大多数坑都迈过去了。社区发行了一个试验机器用的测试方块：2cm立方的空心模型。装完之后如果打印测试方块，完全符合设计，那就说明机器调教OK了。我测试还比较满意，于是开始打印“更大”的模型。  

  

3D打印届有一句经典的话：“用3D打印机打印3D打印机”。除了核心零件外，像外壳啊、加固模块啊、校准螺母啊、热床调平螺母啊、风扇罩啊……自己给自己打印出来。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxrYOJic04K61yx9BWMyzO42LicHVVibqQ7rK7Xvmy3Vr49nbliaibicFuibict0TAYKuOPuaEacyicNHJ1jrA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

  

我打印的第一个“大模型”是一个100mm长的长方形料轴护板，用来保护打印材料，别从料轴上掉下来。可打完了发现：歪了，这是个平行四边形啊！ 于是 在 社区的QQ 群里请教各位 大佬， 得到了若干种分析。 最终 还是把 XY轴拆了，用直角尺 比着重新装好。解决问题。

  

还有一套表面很多细节的螺母。 第一次打印时，发现似乎最后一层(最上边一层)没打完。百思不得其姐。从那天开始，来来回回折腾了快一个月。调整了好多种参数，甚至怀疑是从社区买的打印材料有问题，换了一回货。最后还是不得解决。而且每次调整参数，都出现了不一样的症状。



![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxrYOJic04K61yx9BWMyzO42FjOuxW9maLLby6MDV7RcAN36AbyEdIbAXk70SH0sfBxsTaTYnrbcpg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

最后搬出了测试方块，打印出来居然是完美的。我才开始转向思考是不是我的模型有问题。

  

有一天恍然大悟，问题出在“水平扩展”参数上。这一般用在中间有螺丝孔的模型上，比如M3的螺母，设计螺丝孔直径标准是3mm，实际打印误差可能在0.1mm，这时一般选择加0.1mm的水平扩展，就可以打印出3.1mm的洞，而整体外形还是原始设计尺寸。然鹅，我这个螺母表面有复杂的纹理，扩展0.1之后，纹理之间发生了交叉。所以打印出来的结果，就仿佛发生了“堵头”现象，看上去如同最后一层没打完。  

  

从此记住了一个坑，3D模型设计也要兼容一下打印机的精度。不然很多细节出来后，不是想象的那样。

  

我做完了usdx两个月之后，终于用自己的3D打印机给他打印出来了外壳。此时国内的usdx也衍生了无数种型号。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxrYOJic04K61yx9BWMyzO42ZxdBXIlm21ibWWNEaAvoMEeG2qRFAkUG9REtDP7wqdNBVNGXsiaOrMzQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

为了方便外出时使用usdx，我做了一个带有简单LC匹配电路的2米拉杆天线，也叫品川(GAWANT)天线。  

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxrYOJic04K61yx9BWMyzO42LHUubnu0ay16kM2XBdxg4Of3YxORk6t89exqtbn5lMscPrJjicPVENQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

和半波偶极天线相比，这个天线的效率不会超过30%，但是效率和便携不可兼得。端午节我用5米大拉杆，以CW电报模式通联了北京到北戴河，260公里。所以我对2米的品川多少还是有点期待的。拿DX字头就不用想了，但是解决一下出差期间自我训练CW收发报，品川挺合适的。

  

有兴趣的话您也可以搞一个试试。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxrYOJic04K61yx9BWMyzO42D8t7sEticicP0ErH47rV7HCCTVmJp1gnUDXNKNbWJjtP5UialjLQvoyJQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

最后，我的usdx外壳文件是在这里下载的：  

[https://www.thingiverse.com/thing:4831906](https://www.thingiverse.com/thing:4831906)


