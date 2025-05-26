---
aliases:
  - About GAWANT Antenna
author:
  - BG6LH
category:
  - Posts
created: 2025-05-26 07:56:24
date: 2021-09-15 07:28:00 +08:00
description: 最近又做了一根GAWANT天线，刚装在FT-818ND上，去7023MHz上发CW想看看驻波，居然收到了BG3OJZ的回应。也就是说，一根2米的拉杆天线，在我家阳台上窗户都没出，就从北京通联了保定，直线距离150公里。
image: http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxYbC2fhxuJA9K4A9Hhr3IXMUBvS6fsdh0iamADodH8YvgBohYnyDLqGEAfiaTtUeicO48KQt56ds0Hw/0?wx_fmt=jpeg
source: https://mp.weixin.qq.com/s/6NBBwZhRO4K-B4rRpFrytA?token=644013800&lang=zh_CN
tags:
  - Antenna
  - GAWANT
  - 品川天线
  - 天线
title: GAWANT品川天线
titleSlug: about-gawant-antenna
updated: 2025-05-26 07:57:32
---

最近又做了一根GAWANT天线，刚装在FT-818ND上，去 7023MHz上发 CW想看看驻波，居然收到了BG3OJZ的回应。也就是说，一根2米的拉杆天线，在我家阳台上窗户都没出，就从北京通联了保定，直线距离150公里。

  

品川这名字一听就是日本人搞的。据[K1FM的Blog](https://k1fm.us/2020/06/the-gawant-antenna/)介绍，原创是日本HAM JF1QHZ，用他的老家东京都品川区(Shinagawa-shuku)命名。这不禁让人想起了“2米任丘”有没有？

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxrYOJic04K61yx9BWMyzO42D8t7sEticicP0ErH47rV7HCCTVmJp1gnUDXNKNbWJjtP5UialjLQvoyJQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

来自K1FM博客的品川天线原理图

  

下图是我做的3D打印外壳，略微和FT-818的旋钮有点冲突。不过不碍大事。好歹走到哪儿摸出半导体、拉开天线就能玩。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxYbC2fhxuJA9K4A9Hhr3IXSU1tHduMuwGQNKaALHS7CXlAHYge6oP1SxKqg4ahmGZDQ5umIqjeIw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

我用的振子是一根2米的拉杆天线，内螺纹是M6细牙，这正好跟接M6接线柱的螺纹匹配，好多6mm口径的电子零件螺纹也是这个。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxYbC2fhxuJA9K4A9Hhr3IXXczhE5hCESIo4y70HhCGamNrGichDgzqmKRTE1oOd6cqu6VIR09wia6Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

品川天线的内部  

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxYbC2fhxuJA9K4A9Hhr3IX9wy2AHTnTmAsFu1cuWM8qRWoAA2m7rhBwSTap7JfeReAZpOkruHvtQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

3D打印外壳下载地址：[https://www.thingiverse.com/thing:4964093](https://www.thingiverse.com/thing:4964093)



这是一个有趣的便携天线，但是想必辐射效率不会太高。 我花了些时间研究它，以补充自己关于天线的理论知识。  



## 品川天线是垂直半波端馈天线
  

品川天线属于“垂直 端馈 半波 天线”(Vertical EFHW)一类。很多对讲机天线也是这类。跟常规的半波端馈天线(EFHW)一样，它的基础模型是一个“谐振”的天线。 2米拉杆还敢说在40米上谐振？是的，它的理论模型是谐振的。然后才是考虑把振子缩短了怎么办。

  

EFHW半波端馈天线的理论模式是谐振的半波偶极(DP)天线，但是馈电点从中间挪到了一头，所以它有很高的馈电阻抗，理论上有2450Ω以上，要用高变换比的传输线变压器匹配，一般是1:49起步(初末级圈数比1:7)。来自K1FM的资料里显示(JF1QHZ 原始设计)，品川天线里用到了两档：2:12和2:25的初末级比，变压器磁芯是一个T50-2的磁环。这属于低导磁率的高频铁粉磁环。

  

因为在半波段馈的馈电点上，电流分布是最低点，所以对地系统存在极小的影响。理论上这种天线是不需要平衡的(这也是 λ/2 EF 和 λ/4 GP 的重要区别)。但实际使用起来，不可能精确地工作在谐振点上，所以会有些建议留出λ/20左右的平衡线，或者靠同轴电缆的外皮，甚至是机壳都行。这块可以参考AA5TB的文章：[The End Fed Half Wave Antenna](http://www.aa5tb.com/efha.html)。


回头再看GAWANT，2米拉杆天线，显然不够半个波长——原创是1.5米左右的拉杆，我用的是2米，这还不到40米波段的λ/20——所以它想必有一个极低的辐射电阻，并且有大把的电抗，整体是容性的。所以GAWANT的结构上用到了一个并联LC谐振电路，文档里有一个270pF的可调密封电容，用来调整天馈系统重新谐振，即抵消掉那大把的电抗。我的第二个GAWANT，电容转到一半就搞定了。

  

有关这个天线的详细解读，推荐一篇[JH8JNF的博客](https://jh8jnf.wordpress.com/2017/02/05/考察：ノンラジアルのロッドアンテナへの給電/)。他绘制了GAWANT的等效电路：  


![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHowtVDDVDluvzBNc3feNcNaNmZudOZGmqbCMSJE0G7ibf4UUJxibGLIpHIibrdJ6ialfDSZEXnraJMAHng/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

JH8JNF画的GAWANT等效电路

  

虽然看不懂日文，但是从浏览器翻译的只言片语能体会到JH8JNF分解问题的思路。这帮我理解了并联LC谐振回路在这套匹配系统里的作用。

  

  

## 关于GAWANT的效率

另外我也一直好奇这种天线的辐射效率会怎么样？


两个月前我做完第一个GAWANT时，曾经跟BI1EIH讨论过它的辐射效率。BI1EIH给我了一张图，不过后来我俩都找不到这个图的出处了。


![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHowtVDDVDluvzBNc3feNcNaNEdadapBRmtBQ1DPUxJZNUe6GNWic6zwCnHic7kicKBAQzcb2UqdHUB4Yw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

  

这张图上总结了10.5英尺(大约3.2米)的鞭天线的一些特点。其中谈到，在7MHz上，它的效率Efficiency只有0.312，应该是指31.2%。说心里话，比这个规模的小环天线要高多了。只是，我不知道这两个图所对应的天线模型具体是哪个，它的讨论基础是什么。

  

GAWANT天线，从JH8JNF的等效电路上看，磁环、电感线圈、电容上的损耗电阻，以及2米振子自己的损耗电阻，比起它的辐射电阻来说，已经不是可以忽视的规模了。在制作过程中，各种连接件、不锈钢 材料的介电损耗， 也是原理图上没考虑过的。

  

另有日本HAM JH4AVJ的博客提到，他摸着品川的磁环觉得热了：[Gawantもどき – やっぱり発熱](https://www.jh4vaj.com/archives/2806)


JH4VAJ用的好像是T68-2的铁粉磁环，原创的GAWANT用的是T50-2的铁粉磁环。他们为什么没有用到更高导磁率的铁氧体磁环？如果用FT140-43这类的铁氧体磁环，辐射效率会不会略好一些？

  

我跟K1FM提到的 J L1KLK通了邮件，他是GAWANT原创设计 JF1QHZ 的邻居，他很开心有中国HAM对GAWANT感兴趣，他的回答也很坦诚：这是一个在周末做的业余作品，抽屉里有啥就用啥，没考虑太多。他答应最近见到JF1QHZ的话，会跟他聊聊我的问题。

  

这个回答很富有业余精神～

  

  

## 品川天线 VS 小神鞭
  

有人问我这是不是小神鞭的变种？我错过了小神鞭最火爆的年代。花时间研究了一下小神鞭的历史，这是Robert Victor VA2ERY于2001年发表在QST杂志上的一个短波便携天线：Miracle Whip。卡夫正好有一款蛋黄酱叫Whip Miracle，不知道谁先谁后。不加antenna搜索，满世界都是这瓶酱。

  

G4FON画了一个“自偶变压器”版的 小神鞭 原理图：[G4FON：Musings on the Miracle Whip design](http://www.g4fon.net/Musings.php)

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoxYbC2fhxuJA9K4A9Hhr3IXv6KexfhgZRCDDHlVq5q2rrU2Et0klVxJicm0liaicB1b8DteT2Us6rtNw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)




  

看上去 和品川天线的结构很类似 ，也是用到了电压变压器，还是个多波段自偶变压器，靠波段开关组合出来多种电压变换比。所以看起来这两种天线的基本模型是一样的，都是来自半波垂直端馈。  

  

  

## 结束语
  

GAWANT天线结构很简单，超级便携，效率尚可。毕竟效率和接收的场强是两回事。能随身带着一个uSDX+GAWANT出门心里还挺踏实的。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoxrYOJic04K61yx9BWMyzO42ZxdBXIlm21ibWWNEaAvoMEeG2qRFAkUG9REtDP7wqdNBVNGXsiaOrMzQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

有兴趣的可以DIY一个试试。今天就先聊这么多吧。