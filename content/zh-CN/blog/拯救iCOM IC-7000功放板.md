---
aliases:
  - Savig IC-7000 Power Amplifier Board
author:
  - BG6LH
category:
  - Ham Shack
created: 2025-05-26 08:21:43
date: 2021-11-07 08:07:00 +08:00
description: 打板子修好的IC7000，可以叫IC7001，或者IC-7000 BI1EIH remix吗？
image: http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHow84hOLJ5cITQZeWEDvwOGnmFP0U6fjNnSoKDzWVKbl2JrCQJ4RzNKNgd6mt6E7njiblfa6PBWR3Cg/0?wx_fmt=jpeg
source: https://mp.weixin.qq.com/s/CP97xmAye9cErsm6qDpu_A
tags:
  - 设备维修
title: 拯救iCOM IC-7000功放板
titleSlug: saving-ic-7000-power-amplifier-board
updated: 2025-05-26 08:25:32
---


最近BI1KFY的IC-7000推动级功放板烧了。无线电老中医BI1EIH新做了PCB 给完美修复 。这机器现在可以叫IC-7001，或者IC-7000 BI1EIH remix吗？
  
IC-7000是日本 iCOM公司 2006年上市的一款HF/VHF/UHF收发信机。它的早期产品，烧功放是个常见故障， 原因是推动级设计阻尼不足，容易诱发自激，导致推动管和PCB一起烧毁。 在推动级自激时，有时会发生同时烧毁UHF功放管（即使当时UHF不在工作状态）。

  

## 故障现象

接收正常，按PTT可进入发射状态，但HF/VHF/UHF均无输出。
  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHow84hOLJ5cITQZeWEDvwOGnMicaibKFSnCkz4ra16U5PjTywIqs6Kjgr5PlEGIvIj5ic6zrtpDvibicveA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

拆掉这个板子，需要专业工具，费老劲了……  

  
## 解决思路

在推动级功放板上增加一个1～10Ω的阻尼电阻，可大大降低自激的可能性。IC-7000 的 晚期产品也是这么解决的，它们加的电阻是1Ω。

  
如果你的还没烧，可以自己加一个试试，用小刀在电路板划一个口子，再焊上一个电阻。很多老外就是这么干的。如果你的板子已经烧了，那福音来了：


BI1EIH按原尺寸重新测量、设计、反复打样制作了新的推动板，增加了阻尼电阻，原位精确更换。而且，这个PCB还开源了，需要的朋友赶紧去他的Github下载吧： https://github.com/sgub/ic7k-driver-pcb

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHow84hOLJ5cITQZeWEDvwOGnlKdNxvsA1d7MDDBHfmNurrSXTVtVS1cSsxwQAsIBdxpaFkQ5teJ4Vw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

BI1EIH设计的PCB，R103是新增的电阻  

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHow84hOLJ5cITQZeWEDvwOGnV7C6T1FMQxUIshNRibkupFwt0SsR2OSwXLMdtHQKicvfIvHOf9ufljcA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

左边是BI1EIH做好的新功放板，右边是烧掉的原厂货

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHow84hOLJ5cITQZeWEDvwOGnufvysWibjGNibby0VgkmjHR6wDoxr7DMRFTia18WtnJD1qiaBZvyIHdQ0w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

做好以后的新功放板总成  

  

推动管元件，建议别去“马家店”买，假货泛滥……从贸泽(mouser)的海外站订购更靠谱。Mouser零件编号：511-PD55015-E。

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHow84hOLJ5cITQZeWEDvwOGnFQiblxN5w90ic4ictagAuRxug9QdpceNygQLYhwRqNj5W8AeogicFxxyjg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)  

  

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHow84hOLJ5cITQZeWEDvwOGnfMN3DEjtwFCDicFzmjNKKicuFKXGGWdh0j9uQCfV44xmaOLkaTc2q2dQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

用mouser上买的心里踏实  

  

## 校准

最后，别忘了校准一下IC7000推动级的 **静态工作点** ，确保功率输出达标。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHow84hOLJ5cITQZeWEDvwOGnEzVl1xF88pI6rF1R0ibOt6uI0mSNiamwC1LybiaRuyM400TwmEm6Ihc8Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

  

最最后，汇总一下重要信息：  
  

## BI1EIH的IC-7000功放板PCB下载

[https://github.com/sgub/ic7k-driver-pcb](https://github.com/sgub/ic7k-driver-pcb)

  
如果你的IC-7000也烧了，可以去无线电老中医BI1EIH的 **闲鱼号sgub** 问诊：  
```
27€nrpSXE3A5o1€ https://m.tb.cn/h.fghxdWW 我在闲鱼发布了【#技能服务# #设备维修# iCOM IC-7000推动级功】
```


  
