---
aliases:
  - 40 Meter Band Low Pass Filter Test
author:
  - BG6LH
category:
  - Posts
created: 2025-05-29 04:34:31
date: 2023-04-15 10:37:00 +08:00
description: 今天用上次做的WB2CBA低通滤波器测试板，测了新作的WB2CBA两个版本的40米低通滤波器。
image: https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozN9owmzOia4pHd2S1eOiaoXiaDQ4ZHNuFUxS7blIHL62V9WrIUUoq5pkeYgJyQ1uySa9ukZgmE9iayCg/0?wx_fmt=jpeg
source: https://mp.weixin.qq.com/s/_7Yrf5uNhZiUngmzYta0Ug
tags:
  - LTspice
  - nanoVNA
  - WB2CBA
  - LPF
title: 测试WB2CBA的40米低通滤波器
titleSlug: 40m-band-low-pass-filter-test
updated: 2025-05-29 04:43:34
---

今天用上次做的 [WB2CBA低通滤波器测试板](http://mp.weixin.qq.com/s?__biz=MzI0NTgxNDI0NQ==&mid=2247484333&idx=1&sn=72d0f35f86cbf629e927a46ff3d5b425&chksm=e9498527de3e0c311a0d879dd0c0129ece11f00ad103e123b52f8029824a38e331369f6f1bb9&scene=21#wechat_redirect) ，测了WB2CBA两个版本的40米波段低通滤波器（Low Pass Filter，LPF）。第一版是他设计μsdx时做的，后来他参考DL2MAN的设计省了一个磁环电感。我是在做BD6CR的ADX-S时认识了他的第二版，所以简化起见，我把第一版称作μSDX版LPF，第二版称为ADX版LPF。  


## 仿真对比

对照他的ADX版LPF设计图，我用LTspice做了一个仿真。元件的参数来自WB2CBA的网站和JH1LHV对磁环电感量的计算。先 来一张原始的原理图：

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozKYnWIGHdv0ZTOqu8MicXqwQHM4ERG2mOoMwhRgOTHibjasQ4ekScej8Rc8qjNmIrwTs1jNSzBDhqg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

在仿真电路上省去了磁环L3。因为它只是一个射频扼流圈（上一篇说是匹配电路12.5Ω阻抗用的，但是经BD6CR和BG8NSK提示，它就是个RFC），在射频测试环境下要短路掉。测试板上的+12V接口就是对地短路这个RFC的。补偿三个BS170的电容应该加上。不加的话，插损会变大，二倍频的抑制会变小。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozN9owmzOia4pHd2S1eOiaoXiaP4uiaA0clVGEdlJCZ0js3Jibr8R0xhWRqqb3zKreI0eEYuibD7P2wWRGQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozN9owmzOia4pHd2S1eOiaoXia2MoDWMKpaH8lur6NTp2SibmB7Sv7OVjr8apBuZIgGxoZ2oWN4qwQ79A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozN9owmzOia4pHd2S1eOiaoXiaTAtcIJicTpr2GdF48CwnSkOGrDYj4ZLIgEGn777tmicp6WWk11q2WjXQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

从仿真的结果看，在40米的7.090MHz附近，插入损耗-1.55dB，在2倍频的14.180MHz的插损是50.66dB。  

  

## nanoVNA测试ADX版LPF

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozN9owmzOia4pHd2S1eOiaoXiaYA6l6eN4RsibqOHvuZpqj4KCgA5YxJu3xVVzETS5ccrto9FDaK5uwUw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

接着我用电脑连接nanoVNA，做了一番校准之后，测试了自己做的ADX版40米LPF。  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyDicqicDlgfDCvyY5c5cxAwYP2o46kmzWQW0OvkgYLK94Un6RFLQ3jmiaah5TicVlMwlNNfGedF3f6Hw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

看来起很不错哦，跟仿真对比性能十分接近，甚至在二倍频的抑制性能还多了6dB。

  

## 短路RFC的作用

短路RFC的确有改善，但几乎看不出来。上图实际有一根蓝色的线，是被短路以后的追踪线。但是被粉色（未短路RFC）压住了。在一倍频上的插损不能判定有变化，在二倍频上的变化大概能再降低1dB，这跟线一直到30MHz能看到明显有变化，至少比不短路降低了2dB。

  

## 测试μSDX版LPF

再测测前年做的 [μsdx](https://mp.weixin.qq.com/s?__biz=MzI0NTgxNDI0NQ==&mid=2247484023&idx=1&sn=1d8e48ba9c94b8f0a2e2201425764b30&chksm=e94984fdde3e0debe137a50ae3a7a206c649776e69c48045c01cd42426c87f69a755e9b42354&token=1713095798&lang=zh_CN&scene=21#wechat_redirect) 用第一版LPF。这是一个四个磁环的版本，其中一个也是RFC。测试结果，插损低于ADX版，但是二倍频抑制不如第二版，可以想见发射杂散会更高一些。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHozN9owmzOia4pHd2S1eOiaoXiacPKAic0WePFeicZP7R29tqEHx1pA4TTiazHXvIBBkumiapibPa5Ey2Miaq3g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

你可能发现两个LPF测试的曲线完全不是一个风格。这可能得去问问切比雪夫或者巴特沃斯了。

  

## 整理测试结果

| 版本 | LTspice仿真LPF40 | ADX版LPF40 | μSDX版LPF40 |
| --- | --- | --- | --- |
| 7.090MHz插损 | \-1.55dB | \-1.60dB | \-0.51dB |
| 14.180MHz插损 | \-50.66dB | \-56.71dB | \-40.38dB |

因为仿真软件和nanoVNA的 采 样频率步长 并不完全一样， 所以采样点频率的 零头有几kHz的差异，暂且忽略不计了。

  

## tinySA发射测试

装上以后发射性能如何？我用tinySA测了一下ADX版LPF在40米波段的发射。 加了20dB衰减器的测试， 所以发射功率可以达到15.7+20=35.7(dBm)，3.7瓦哦！ 二次谐波的差距有-58.8dBc，很接近nanoVNA的测试结果。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHozN9owmzOia4pHd2S1eOiaoXiawLC99gQKS2TdAtZkoSojD6bibvOiaP9oRADTiaJQjdvNLKoF7f6a2NYpg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

## 推荐一下JH1LHV的Blog

他一年前就在研究WB2CBA的低通滤波器，并且给出了调整的建议。他的网站上也有大量的无线电文章可以读，有兴趣的可以去看看。下边推荐的这篇就是在分析ADX版的40米LPF。

[https://www.jh1lhv.tokyo/entry/2022/06/04/200749](https://www.jh1lhv.tokyo/entry/2022/06/04/200749)

  
