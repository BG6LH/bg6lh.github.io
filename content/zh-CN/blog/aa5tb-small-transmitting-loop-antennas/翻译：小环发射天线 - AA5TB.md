---
aliases:
  - AA5TB - Small Transmitting Loop Antennas
author:
  - BG6LH
category:
  - 天线
created: 2025-05-24 04:05:41
date: 2019-09-24 22:44:00 +08:00
description: AA5TB对业余届最重要的贡献恐怕就是他的小环天线计算器了，很多HAM做小环天线时都会用这个excel预测一下参数和性能。我把我阅读他网页时记的笔记整理了一篇译文。分享给业余届的朋友们。
image: http://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHowwAWqyzw8xGpJNfNXtMQu2fZPwHu1QxoIMV5BKpsoTNWJOcDqlEiafUu3Hsdl5huO9tkWKjXcwPibw/0?wx_fmt=jpeg
source: https://mp.weixin.qq.com/s/flXPdidZVzOzY3q8hf4GqQ
tags:
  - 小环天线
  - AA5TB
title: 翻译：小环发射天线 - AA5TB
titleSlug: aa5tb-small-transmitting-loop-antennas
updated: 2025-05-24 04:11:38
---

AA5TB对业余届最重要的贡献恐怕就是他的 **小环天线计算器** 了 ，这是个Excel表单文件： **aa5tb\_loop\_v1.22e.xlsx** 。很多HAM做小环天线时都会用这个excel预测一下参数和性能。我找到这个excel时也读了他写的网页： **Small Transmitting Loop Antennas (Magnetic Loop Antennas)** 。我把当时记的笔记整理出来，尽量忠于原文形成了一个完整的翻译。 我不是学通信专业的，所以里边很多名词是对照中文版《ARRL天线手册》翻译的。还有一些我的理解也一并写在原文后边的括号里，加了注字。原文中AA5TB的\[ref.\]都在译文相同位置保留了。末尾的“原文链接”就是AA5TB的小环发射天线网页，可以下载最新的计算器文件。欢迎各位老朋友指正！本文的所有图片均来自原文网页和网页的链接。

  

73， BG6LH

20190924  

  

---

  

## 小环发射天线  

**Steve Yates - AA5TB**

我从1980年代开始实验了很多小环天线(通常周长小于1/10波长)。我自己摸索过几次，后来在《简氏目录》的军事通讯装备增刊里看到了这种天线。我没有渠道了解这种天线的信息，于是我按照片“逆向工程”了几个。后来我了解到这种天线还是挺著名的\[ref.\]。ARRL天线手册的方程给了我不少帮助，让我设计的这类天线能按照我设想的方式工作。现在互联网就是小环天线的金矿。

我发现空间不够一个全尺寸天线的时候小环天线是非常有用的。耐心地把电阻损耗降到最小，小环的表现还是很可观的。这种天线的用户，包括军队，都报告过不错的结果，有时候甚至架设的很低，靠近地面，或者靠在木栅栏上，在屋里，效果都还能接受。 无论如何都要注意，这种天线的附近的场非常强，所以不要试图在QRP功率级别功率以上使用，除非你让天线远离人群。这种天线不需要考虑地面效应的作用，所以基本可以认为和地无关。但是，像所有天线一样，地的质量越好，地面损耗越低。通常，小环发射天线垂直安装的时候，哪怕靠近地面也能表现的不错，而且在方位角方向图(azimuth pattern, E面)上呈现出有用的尖锐零点(Null)。当水平朝向时(注：原文是When orientated horizontally，根据上下文应该是环的平面朝向水平面)，方位角方向图是全向的，但是从仰角方向图(elevation pattern，H面)看，和高度相同的水平偶极天线相比不一样的是它的零点在顶角(zenith)。


如果你怀疑小环天线的性能，只需要记住这里并没有黑魔术。这些天线依然遵循各种物理法则，和其他小型天线一样。记住下边的话：

以下三点天线的指标，你只可能达成其中的 两个 ：

• 小尺寸（就波长而言）
• 效率
• 带宽

你不可能做到所有的三个。换句话说，小环发射天线牺牲了带宽换取更小的尺寸和效率。效率越高可操作的频率范围就越窄。如果你做了一个带宽很宽的小型天线，那一定效率不会很高，你可能做了一个假负载。如果看起来真的三个指标都做到了，估计你的馈线已经是天线系统的一部分了，你并没有做出一根小型天线。


我搞过从3.5到450MHz范围内的很多小环发射天线。从实践的经验看，有效的小环天线的上限频率在60MHz左右。我搞的更高频率的小环发射天线，也表现出有用的尖锐零点和非常窄的带宽，但即使用非常厚的导体，趋肤效应带来的损耗对于发射来说也太高了。后面提到的UHF小环发射天线非常小，我尽可能把效率做的更高，就差没镀银的和用超导的材料了，但是在445MHz用10瓦发射的时候依然非常热。高频的小环还是用来做导航和收音机接收天线，或者带通滤波器的前级吧。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHowwAWqyzw8xGpJNfNXtMQu2eYSlIO93PqXllaOjkiaibNKlEqziaESqxggkFEHic1gicwyAd510UFib2IqQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

**小环天线示意图**

  

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHowwAWqyzw8xGpJNfNXtMQu2j3wQhAk0SFvjmZhDYlGGfD1UaBcGI70syLDlM1ibiaLDn8E8cAXlUB0g/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

**小环天线的等效电路\[3\]**

  

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHowwAWqyzw8xGpJNfNXtMQu2ViaYVEHNj2CW4FicaThGtURSVGosvbt32vX9iadbX11y8e84icBk7mVsUg/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

**小环天线的辐射方向图**

  

---

  

### 技术信息

小环天线是一个很大的谐振电路，可以把它看作是电路里的一个大号的单圈电感(inductor)，因为尺寸很大(相对而言)所以很容易产生辐射。实验者可能会发现绕的圈越多辐射效率越低。一些低频的环天线绕很多圈，可能是为了获得谐振，但是辐射效率一般会很低。基本上，辐射电阻(radiation resistance)随着小环尺寸增加而增加。假设损耗电阻(loss resistance)不变时，辐射电阻越高，辐射效率越高。增加环的圈数会增加电感，但是也增加了损耗电阻。最后成了一个尺寸更小圈数更多的典型的LC谐振电路(tank circuits)时就不会辐射啥能量了。

因为小环发射天线的阻抗很低，用50欧姆同轴电缆给它耦合能量就很让人困惑。我发现用一个小的耦合环(见上边的示意图)或者一个自耦变压器，做变压器耦合就很容易达成。早期的一些设计(例如军用环、帕特森环)用一个相当复杂的电容馈电系统，我是一点仿造的兴趣都没有。用一个小耦合环耦合，还有个好处就是如果你的尺寸稍微做大了一点，你可以通过调整耦合环和主环的角度，获得更好的匹配。我用一个小磁环做的变压器耦合就很成功。

有很多小环天线的错误概念。小环天线常被当作磁场天线。这是因为它们主要响应电磁波的磁场分量，并且在极近场(extreme near field，小于1/10波长的距离)发射出很大的磁场分量。在远场(大于1个波长的距离)来自小环的射频和其它天线发射的是一样的，都是由电场和磁场组成的。实际上，在1/10和1个波长之间它响应的电场分量要多于磁场！通常认为的小环天线不会响应本地噪音，因为本地噪音大多数是电场组成的。这 **只有** 在下列况下是成立的：问题源位于小环天线极近场 **并且** 问题源是一个真的电场源。 举个例子可能就是离小环天线非常近的地方，有一个带弧形绝缘子的高阻抗输电线。在这个例子里小环天线可能不会响应它的干扰，就跟偶极天线一样。同样情况下如果这个输电线在几英里以外就不好说了。这是因为你不可能让时变电场(time varying electric field)不产生时变磁场(time varying magnetic field)，反之亦然。这就是电磁波的产生。非常值得注意的是，因为小环天线的辐射方向图上有两个尖锐的零点，这会非常容易避开本地干扰，并得到很大的方位角覆盖区。而且，除非小环有完美平衡的电容(电场)屏蔽，否则它还是会被附近的电场干扰，因为有电容耦合。以我的经验，小环天线和更大的天线比，通常信噪比更高。


小环天线的极化方向大多数情况下和环的物理方向是一致的，这是因为环形电感上的高电流。从环平面看，少量的交叉极化会在零点方向上产生，因为有高度集中的电场穿过电容。在自由空间里，两个极化都呈现，总的极化取决于环。当安放点靠近地面小环垂直朝向时，水平极化分量大多被抵消，剩下垂直极化作为有用分量。当小环水平朝向时主要的极化分量是水平极化，为了保证操作效率，天线需要被安放在至少1/2波长高度，以获取有效的辐射方向图。在考虑到高度时，水平环(注：水平朝向/水平极化的环)可以被看成水平偶极天线。垂直环在低高度也能工作的非常好。这些都是假设天线的尺寸足够小，小到可以被当作真正的小环。环做大了它就开始偏离“磁偶极天线”，并且方向图极化方向也变了。最后成了一个全波长的大环时，它的方向图会跟小环非常不一样。

### 自由空间小环天线的基本方向图

**(来自MININEC)**

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHowwAWqyzw8xGpJNfNXtMQu241AnMW9JEYO31gaBgap1Yq4JGbicL0yI53alHuIkXgGkEqnl25E0FIg/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

**小环天线参考示意图**

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHowwAWqyzw8xGpJNfNXtMQu2p2G36kd0lOLCPEy2J2yz56Ea9H9fUXc0IMVib2yXG7OjhCPBSyPqbFQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

**总体方向图 (垂直和水平极化结合)**  
蓝色-沿着Y轴观察  
红色-沿着Z轴观察

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHowwAWqyzw8xGpJNfNXtMQu2csSr6ic17jvicx8TTYicO6JjCDxwK2n4AmX6AQkuecdicXaHeOVxdVR4sg/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

**沿着Z轴观察的方向图**  
黑色 - 垂直极化  
红色 - 水平极化

  

在我看来小环天线表现的如此之好，在非常低的高度上(垂直安装时)是因为，在极近场(少于1/10波长)环的辐射场大多是磁场分量，相比其它有更大电场分量的大多数天线(比如偶极)，在普通地的磁损耗比起介电损耗或许要少。例如：偶极天线的一头或两头如果靠地面太近，大量的“位移电流(displacement current)”会传导到地面，引发来自地面的返回电流，而且也参与到天线的发射。地实际上变成了串联在天线两端的一个电阻。在小环天线上，这种位移电流被高度集中在电容极板之间，地的影响非常小，除非电容本身非常靠近地。不过，和其它天线一样，在距天线更远的地方远场能量还是要受地面损耗\[3\]影响的。我们通常对地也无能为力，除非我们把天线放到海边。

  

还有一种说法是，垂直的小环天线，不受“准布鲁斯特角抵消效应(the pseudo-Brewster angle notch-out)”的影响，其它垂直安装在地面的天线会受此影响。我没有足够的理论解释这个话题，我的第一反应是垂直的小环在这方面应该和其它垂直天线是一样的。不过，一些人在真实环境的实验表明这个现象还是值得后续继续研究。

  

小环发射天线和其它标准天线相比通常缺少测量数据。我只发现了一篇\[2\]是对比1.7米AMA8小环天线和20英尺海军鞭状天线的数据，以及一个优化20英尺中部加载(center loaded)的鞭状天线的预测数据。鞭状天线用一个自动天调调谐，一个泡在海水里的铜盘做地。数据收集自2到14MHz。小环天线要优于20英尺自动调谐的鞭状天线3到4个dB。小环在8MHz以上超过优化后的鞭状天线预测的增益。数据通过地面波收集。该作者还推算了Racal Mini-Loop Model MLA (1.53mx2.1m) 天线的NVIS(顶角)增益，通过一个100公里外接收站的数据，对比这个天线和已知的谐振偶极天线的增益。我从一个小图表上看到最好的数据显示，NVIS增益在2.6MHz大概-8.7dBi，然后在5.9MHz上升到1.8dBi。

  

垂直或水平架设小环天线的主要不同，是极化方向和天线方向图零点朝向的不同。贴近地面水平小环天线的电场损耗可以想见比较大。 我读过的一些文章说水平架设小环的方向图出射角(take-off angle)会比其它水平天线小。我没有见过这种说法的正当解释，不过从小环自由空间方向图上看，它的零点总是直着向上的(侧面)，这会导致小环出现较低的辐射角，比起低偶极天线主瓣直着向上的来说。这可以看作一个低偶极天线仰角方向图(一个宽的主瓣直着向上)，在顶角(90度)上有一个切口。不过，当远场在低角度做比较时，比如低于10度，这个结果才有可比性。我以后会搞一个方向图对比展示这个。（注：本文目前还没有看到他做了这个对比图）

  

既然大部分近场的分量是磁场，这种天线应该架设在距离含铁的物体至少1/10波长以外，比如铁塔、铁架子等等。这些物体会导致损耗，因为内部会产生电涡流(eddy currents)。普通的家用铜电线可能会是一个损耗因素，取决于线、或者布线回路内部的谐振点等等。在一些案例里，天线跟外部电线的耦合，可能还提升了性能，尽管我没有测量数据证明这点。不管咋说，和我用其它室内天线的结果相反，我在小环天线使用上还是非常幸运的。

  

---

  

### 小环天线方程(铜环)

***(假设为圆环, 其它形状时结果会不一致)***

\[7\]

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHowwAWqyzw8xGpJNfNXtMQu28iaZTdJbBIRK8gLgShnRzV49H6ffaqcwiaV6PatYxwDNYVgk424cRApw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

(注：微信公众号文章不能显示公式格式，所以只能贴个截图。具体公式可以参考“原文链接”中AA5TB网页上的excel）

  

---

### 制作小环天线

  

制作小环天线很直接，简单地基于能找到的材料和期望的性能、确定合适的直径就行了。环直径越大，效率越高。如果环的周长大于1/10波长，它就不再是典型的小环，并且它的辐射方向图也会变化。你可以不在意这个。选择的导体直径要尽可能大，最好是铜(或者银)。这会减少损耗电阻。导体不必是实心的。我曾经用过3/8英寸螺旋馈管做主环，效果就很好。螺旋馈管有波纹铜管做屏蔽。通常的观念是用厚的编制铜带连接电容和主环，如果你这么做要特别小心。我曾经用编织带连接调谐电容和主环，结果编织带非常热。以我的经验编织带在高射频电流下的损耗，会比实心线或者管子实际要高。这个现象需要后续研究。如果天线的一部分变热那毫无疑问这里产生了损耗。

  

选择电容的容量要依据在期望的操作频率上能让环谐振。电容是制作这种天线的最复杂的一部分。因为非常高的Q值，大多数可选的电容在超过10瓦功率时就会产生电弧。切记即便是几瓦的功率也会在电容两极产生数千伏的电压，有几安培的电流流过电容(不同相，没有免费能量，注：无功功率)。传统电容的损耗会很高，因为它们的电刷触电和非焊接页片之间有几毫欧的电阻。基于这个原因，尽量找一个焊接页片的分离定片电容。这个想法是不让射频电流经过任何移动的、和/或机械的接触。电容之间的空隙尽可能大，除非用低功率。如果你用QRP级别的功率，你能找到的只有一个单定片/动片的电容，那就继续用。只是要注意，这种电容的损耗可能会很大。我曾用传统收音机的电容做过小环天线，在QRP上工作的就挺好，当然它们可以更好。一些人自制过“长号”风格的电容，套在铜管上，可以得到低损耗/高功率的性能。强烈推荐使用带减速器的电容，因为天线的Q值非常高，调谐的区间非常尖锐。还有，如果长期在户外使用，要注意电容的防水防虫。

  

给小环天线耦合能量有好几种可用的方式。到目前为止，最简单的方式是做一个示意图里的那种耦合环。耦合环和主环之间没有物理连接。即便是做一个屏蔽耦合环，把耦合环的屏蔽层和主环在底部连接起来也没有害处。为了获得电容屏蔽特性，你可能想做一个屏蔽耦合环。这据说可以确保环的初级和次级之间只发生磁耦合。我没有做过屏蔽和非屏蔽耦合环的对比，因为我相信这两种方式都可以工作，不存在任何问题。射频探头的测量结果显示，这两种方式下，馈线上都没有共模电流，天线的辐射方向图也符合定义，所以平衡不是问题。做一个屏蔽耦合环很简单，把馈线绕成期望直径的环形，一头绕回来直接连在馈线上。馈线连接处剥开，把馈线一头的芯线和屏蔽层一起都焊接在连接处的屏蔽层上。在这个环的顶部，把屏蔽层环切一个小口。屏蔽层在这里必须完全断开。这种风格的屏蔽耦合环使整个天线系统对电场无感。

  

(注：如果觉得AA5TB文字描述的抽象，可以参考下边这两张图，来自N4SPP的网页，他列出了六种“屏蔽耦合环”的方式。并且在2019年8月23日刚刚更新了这部分。我想AA5TB描述的应该是图C的方式)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pd6QQJk3lmtKy78bdSGo6pZsPDcibCgictgNAX3W8yE1elAl9Fmv0J63Tg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdhNBhk2iaFzaMAP0hR0iac13WI9tviaxjcPsbTggZMUBicu5mlAKibxv0fWQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

  

如果小耦合环比需要的尺寸做的稍微大了一点，那还可以通过旋转主环里的耦合环来调整和主环的耦合。这提供了一个调整耦合的精准方法。

  

另一个耦合主环的方法是自耦变压器式耦合。这种方式下，馈线的屏蔽层直接连在主环的底部，馈线的芯线延伸出几英寸，连在主环上。这个连接点需要通过实验找到而且不太好调整，但可以用电气方式找到就行。这种方式类似于八木天线没有串联电容的“伽马”匹配。

  

还有一种电容耦合方式，用到电容分压技术来匹配主环(帕特森环)，这需要几个高质量电容。我没这方面经验，你们可以自己研究一下。

  

无论你选择什么方式把馈线耦合到天线，都要把预期频率范围的中心谐振点的SWR调整到最低。一旦调好这段频率的耦合就不需要再调。这也是这种天线另一个美妙之处。

  

我读到过一些讨论是关于这种天线需要极度平衡，以获得深度零点并避免共模电流。我的经验是，上述几种馈电方式都不是某些人想象的那么大的问题。馈电点在天线阻抗的最低点，或许只是我比较幸运，我用射频电流探头测量了馈线的表皮和天线方向图上的深度零点，结果都表示平衡的相当不错。

  

下边这个表单，是我为了设计这种天线做的，希望你会觉得它有用。请注意，以毫欧计的电阻损耗仅当你需要评估额外的损耗时用，比如不良的连接。 这个程序假设使用铜作天线导体，铜的电阻已经计算在内。还要注意，表单里以最大环周长表示所谓的小环性能。如果环直径(注：应指周长)超过这个值，效率会增加但是方向图会变化。极端的例子是，如果你把周长增加到一个波长，效率会非常高，但是侧射方向图(broadside pattern)会跟小环相反。很多小环天线的实践者推荐用0.25个波长的周长，这是效率和有用的方向图之间一个很好的妥协。

  

### 计算器

  

注意：这个表单是一个从1990年开始一直在进展中的工作。我正在做一个大清理，以把我多年来从很多高人那里学来的东西都整理进去。因此，aa5tb\_loop\_v2.00正在开发中，会包括 Kai Siwiak，KE4PT的“零点深度”计算\[8\]，以及其他改进。
  
**[aa5tb_loop_v1.22f.xlsx](https://www.aa5tb.com/aa5tb_loop_v1.22f.xlsx)**  - Microsoft Excel 表单应用， 包含 Kai Siwiak, KE4PT 的修正。也可以用 Libre Office 打开。

(注：需要这个excel表单的老朋友可以去“原文链接”AA5TB的网页上下载)

  

---

### 我的第一个环

我从1988年开始实验第一个小环天线，我没有任何资料，除了几张《简氏目录》上的照片。我第一个尝试是试错的，不过也搞的很成功。下边的照片是1991年8月8日拍的，我的第一个成功的小环天线。在4.8MHz到17.5MHz可调，我用了好几年。这是用3/4英寸铜管做的，用自耦变压器方式耦和。主调谐电容是一个500pF的空气可变电容。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdiaGUPzRDWBr9XPibvvYuicCbNy3Yemhwq7QbtDFM1IZhKPBJ3l2mZAVvA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdybdulX7Tw9zniaJLDzQyaW7ibTQdxkXjldHfXwG7Q9QsgEWT3ibdk7z2g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdgfjU1pgDtPcWfichQC75AyQBgibIkwkLyib6UO88G7uEqb9T8cl5071Sw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

---

### 3英尺铜环

  

这个环直径三英尺(注：直径0.9米周长2.86米)，用5/8寸铜管做的。我用了三联可变电容的两联。环的一头连一个定片，环的另一头连另一个定片。这等效于两个电容串联，共用一个动片。这种方式下，没有电流流经电刷的损耗。用了一个电容屏蔽耦合环给天线馈电。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pd30ZNg1qPrP9J1oWVGtHqI46GJRTUv2ahJicwHqDQS10Sg9vDSJbU8Pw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdYK9iaBEjnKD2ku1oeXpic6sKPU6nQR2kj5rGbeMZhqib5G7EokdGI4fww/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdiaFcUuIqVWdZMZaqurqgUmlEaWic7V7jEcUiauKPkMFaPiaH0gY8HL2twQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pd4fvQAhbAiceRN9JdLmiboetBlzVwB4VURd9VDRpTNFWrcZPy9PNuuibSg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

这个天线表现得非常好对我来说，从9 MHz到28.5 MHz都可调。

  

---

### 便携环
  


我用磁环天线的最主要问题是，在野外不太好运输。我总是想着我可以折叠起来并且带到野外在野营地部署。很不幸，用小环天线便携和效率不能同时获得。任何灵活的联接方式通常都带来足够严重影响天线效率的电阻。

  

我做了两个原型都可以调到30米。第一次是用RG-8的馈线做的，尽管之前高功率实验已经表明，编织带对低辐射电阻天线不好，但为了便携，我还是选择这么做。这个天线是方形的，在第一次实验里我用绳子和棍子把它挂在我的屋里。这也是我第一次用铁氧体磁环变压器耦合给小环馈电。我用馈线自己作为电容。通过天线分析仪修剪主环馈线，我可以很快把天线调到30米中段。

  

把我电台设置到5瓦输出，很快就搞了几个QSO。

  

之后的一个好天，我把这个天线拿到户外再做实验。它表现的相当好，不过我没有任何定量的数据。当我有更多时间的时候，我会在网页上发表更多的详情。它太简单了。现在先发几张照片吧。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdB9o8jfIgVYQJc2lulztCrn29sQhfiao5qR7ibgciaYXLWo9MBO2AibFzxA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdLiaSpwhicrsszXicrmKPWVCCszOteIldm1liaCmLAE5PicK2aG1nzQSpBYA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdBx8X5KjDE0ibJf9xYQ3VptjicREgzvkice0vuudgTJRLGsZMoRbOVLhHQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdkYSibyBzCoNAYpmt3SmjRib86I3B0THYSNibFibSqc1ibia6Gbhic7P8FibXrQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdFRU2fKJzRDfiaF5tNZlGsJhqtPwTA9hZpicoDicoZPB87hzPtaFt7qRMw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

后来，我决定做一个可以单点支撑、可以折叠放进一个背包或者小袋子里的小环。我用22AWG的实心绝缘铜线做了一个三角环。我知道这个环的效率不会太高，所以我就做了个比通常尺寸更大的来提升效率。我做了一个“绞合电容(gimmick capacitor )”，把铜线的两端拧在一起来提供电容。先修剪好线头的长短能接近预期的频率，然后调整线头拧在一起的多少来微调。一开始我按期望的周长剪了一根平行电线，然后把线分开留着一端做绞合电容，另一端装上铁氧体磁环后把两头焊在一起。

  

即便我确信这个天线的效率很低，但我用5瓦跟新墨西哥州做了30分钟不错的QSO，就在这组照片拍摄之前。以后会尽快呈现更多的详情。一个提示：主环越大初级(红线)上绕的圈就越多，以便把谐振点的驻波拉到1:1。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdj1cHoA4gTiaiaiasmjtbEqEfo03u572OZUuAYfUHq1gx7cRb8NH8lruXA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdVIzPcDcEZnzI2y6CYdSMq8ibf5acic2ZYZ6BBmQX03ibpCRl8Yu9iczsPw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdmibeCumlkNMalGUqzb4tTkGyqFkvPSGkrBzZUDY1xmrvOa4UCxk78sg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pduWgiahPp1HGiaJ6HtTwqhG9sGhHMbVtmAjibic9oz61YxOhtiaaibG0eiazOg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

  

---

### 2米(146MHz) 波段 3英寸环

下边是一个3英寸直径的电容屏蔽小环天线，我给2米波段做的。用了半刚性馈线(实心铜皮)，并且小耦合环可以在主环里转动(注：调耦合用)。我做这个只是为了验证一下，但它真的能用。带宽大概只有100-200kHz(在146MHz)但是它至少不比标准的胶皮天线(rubber duck antenna，注：指裹着胶皮的缩短型手台天线)更差吧。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdBYuDWpWCNlLlfeSibrmMS8G4aPOOyBAGicCbueevN9bATzsdXhUlp1Hg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

  

---

### 70厘米(445MHz) 波段0.7 英寸环


2004年我买了一辆Mini Cooper，我开始尝试各种方式实现一个伪装天线。我考虑把一个UHF天线藏在后扰流板里，只是想看看这能不能办到。我做了一个70cm波段的小环发射天线，可以轻易藏进去。为了让导体足够大，我用了一段5/8英寸的铜水管作为主环，在顶部切开一个缝隙，贴上一段绝缘皮和一块铜皮形成电容。环导体的直径实际比整个环的直径稍大一点！从环平面(零点方向)看过去它和普通环一样。但是当你侧着看，它真的很厚。这个环的表面积对这个尺寸来说非常大。我能做的唯一改进就是用银管或者超导体了。电容是用3M压敏胶带做电介质，用铜皮做中间定片，跨过环的两头形成电容。要是没有矢量网络分析仪，调整这个天线就不太可能了。很幸运我有一个HP8720B。带宽在445MHz有100kHz。我轻松获得了20dB的反射损耗(return loss，1.22:1 VSWR)，并且基于分析仪的结果，我觉得这个天线应该挺不错。不过当我用10瓦发射的时候，天线很快就热了。 考虑到这是一个大块厚铜片，所以看起来大多数射频都用来加热天线了！我只能说这电容做的还行。我怀疑这可能是因为趋肤效应，大量射频电流(几个安培)只是流经了铜管外表的少数原子。因此我推断，大多数目的下，在UHF上使用辐射电阻非常低的天线不切实际。无论如何这是一次有趣的实验。下边是一些这个天线的照片，装在一个Icom IC-T7H手台上，还有这个天线详细的示意图。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyMUlr6QzNGcibYib9booa2pdPlFHwZnzM788x4j6jwXa87M5AOYjumX8qyoMW3vFHNt6QcibWWZiao7g/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdiaGdJOsYjFyu1RGuibSAic1fgEmMlvA4A7mOaah2iabdghvUtSicrFCD3Qg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdPHXfJ0fxrHzgauEcCibd2sPzQ2SECJFoQggUxprbS4L2jx4TQmSSxVA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdO149shQkyiciaBkQZj3NE0Q5xYN6p2KAgibpibVr4Lu8LxV8eXB8XnWoxA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdQSe2l1Oy2W8ia2Bpn6wDAib7KWF60mLYwKibLs8097LQU8ez1jXx6Nhow/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdWkbJhRD6KYvmujicM93NODEXpXrcbfCtmesQpTrLO2u6GX6IgXK6yXQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

---

### JL1BOH的小环

  

这是日本的JL1BOH做的高效的车载小环天线的照片。他很清楚他在做啥。感谢他发给我这些不错的照片。

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdV2jK5oUZn3qLj7WWyoH7UqZjHbu1r3dJPgTqiciaaeTlvfic2g4pfrGmQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pd3DFNO3kmMqiamHpXQiclXxUPjsht1I7XsNkBspZoTmvibKCQzibC8SeebQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pd2DKTglTvMydgDw3hvpyoictDSjefIfuPlHVSGnibVGnNCQ6FlIs6Ctsw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdicMV14j4un2DIRY48pGRL96wic9ZlG92KRSb7G1lTuHKndBSLJSLmjsA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

  

---

### Ruthardt, DL2HRG 成功的室内小环

Ruthardt 也做了一个非常不错的小环，用自行车轮圈！他在德国一个公寓楼的一层用这个天线。他说他用这个天线挺成功，他还说对于那些没条件装大天线的人来说，这是一个挺好的妥协天线。下边是他天线的一些照片。感谢Ruthardt！

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdawoAJkRxRxapkyI6EQZAicnCu2ib1cwGRvjQ7ibb7SHoC80agNHnicZPmA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdgjHzW9VOIdnk6wB2kR1dg7jLrW69hfIMiabewIPbliarmwZicdw8UTICA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdp3ZcbNeGWvzM62lQAflzuhZkUkk4TYN1T6rzLhux90kT34CrsUqJPA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdQFrvgk0Uvs2HExgk3URNSKx1nwRHt5CjnTTsFVr95nBy4ecoj9Pl2A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdKw9Xv4ky2hvz2GFNRsVGUEneAmrMc9BIT55AqmZyAiarLRgEPcIVQcA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

  

---

  

你看到这艘美国海岸警卫队军舰上的小环发射天线吗？

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pdprRcJHEQ0EAKVeYxZOLGkLIsicGdSrYfRLEycAibLGP4fQiaW9kn1Hs2g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

找找这个船上的？  

  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/8havQfBUHoyMUlr6QzNGcibYib9booa2pd7o9JWibIuVMzuAeOlSr13sNWWkFwJ2B6iaCdj67FrlShAoDhD8xhHSbg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

  

这还有一个波兰的漂亮小环(注：图片打不开了)  

  

---

### 效率 vs. 线径

下边的表是3英尺直径的环在不同线径、频率下计算出来效率的数据。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyMUlr6QzNGcibYib9booa2pdoicywjYwzNUsSoWw0zXhNggQavaodEKKucCI6SVPt7SsM286Dcu4ZibA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

  

注意加上0.5欧姆的额外电阻的结果(图例里的最后两条线)。请注意这个例子里直径1英寸(注：25mm)导体做的环加上额外的电阻之后，它的损耗比高质量的AWG 12(注：直径2mm)的导线损耗还大。这就是为了说明，如果给定的设计里存在可能预料到的额外电阻损耗，那么导体再大也不会比一个小导体好到哪儿去(注：或者说小的不会比大的坏到哪儿去)。额外的损耗电阻会给较细的导体带来负面的效率。但是就算用这样的天线也有人取得了不错的效果。


(注：他说的这种天线是个链接，来自网页 http://www.zerobeat.net/g3ycc/rock.htm，就是下图这种天线)

![图片](https://mmbiz.qpic.cn/mmbiz_png/8havQfBUHoyMUlr6QzNGcibYib9booa2pdORhZ8w7zrjJCTrasoQfoeQItW1OmZ7MTx2K6s89o4ubsSMf6xmLfXw/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

  

记住这里的说的损耗是相比完美天线的损耗，并且不考虑地面反射、方向图增益、损耗等等。即便有可计算的损耗，但是来自特定特天波的场强也可能会大于不同设计的更高效的天线。换句话说，无论如何都要多试试。你会喜欢这个结果的！

  

---

### 其它短波小环的网站  

这个列表可能需要更新，你常用的搜索引擎应该效率更高。  

  

- Magnetic Loop Antennas - by PY1AHD (a superb loop site!)  
	http://hps.infolink.com.br/py1ahd/
- Stealth ST-940B Mobile HF NVIS Magnetic Loop Antenna - by Stealth Telecom  
	http://stealth.ae/plugins/custompages/detinf.php?id=372&id\_categories=136
- HF LOOP AND HALF-LOOP ANTENNAS - by STAREC  
	http://www.antentop.org/004/files/star004.pdf
- PA3CQR Magnetic loop antenna page - by PA3CQR  
	http://tudl1101.home.xs4all.nl/magneticloop/
- 80m Frame Antenna - by SM0VPO  
	http://www.sm0vpo.com/antennas/frameant.htm
- Packing Crate Antenna - by SM0VPO  
	http://www.sm0vpo.com/antennas/crate.htm
- REMOTE ANTENNA TUNER (for loops) - by SM0VPO  
	http://www.sm0vpo.com/antennas/servo.htm
- Magnetic Loop Antennas - by ON4CEQ  
	http://www.on4ceq.net/ant\_en.htm
- A Magnetic Loop Antenna - by GM3MXN (via G3YCC)  
	http://www.zerobeat.net/g3ycc/loop.htm
- CT1ETT's Home-brew Loop Picture - (via G3YCC)  
	http://www.zerobeat.net/g3ycc/rigs1.htm
- THE ROCKLOOP - by W9SCH (via G3YCC)  
	http://www.zerobeat.net/g3ycc/rock.htm
- A magnetic loop antenna for HF - by Peter Parker VK3YE (ex. VK1PK)  
	http://home.alphalink.com.au/~parkerp/projects/projmag.htm
- An Unusual Two Band Magnetic Loop Antenna - by Jindra Vavruska, OK1FOU  
	http://www.qsl.net/ok1fou/e\_loop10.html
- The G3BGR Magnetic Loop - by G3BGR  
	http://www.geocities.ws/gw0tqm/magloop/magloop.htm
- Practical Experiments with Magnetic Loop Antennas - by David Reid PA3HBB / G0BZF  
	http://www.qsl.net/pa3hbb/magloop2.htm
- Magnetic Loop Antennas and Other Indoor Antennas - by Radio Habana Cuba: Dxers Unlimited Special Edition  
	http://www.radiohc.org/Distributions/Dxers/scripts/99-0925.html
- GW0TQM's Magnetic Loop Site - by GW0TQM  
	http://www.geocities.com/gw0tqm/magloop/magloop.htm
- Magnetic Loop Antenna References - by Chris Trask  
	http://home.earthlink.net/~christrask/magloop.html
- DJ3TZ's Small Tuned Loop Antenna Page - by DJ3TZ  
	http://www.qsl.net/dj3tz/loop2.html
- Meine Magnetic-Loop mit zwei Windungen für 80 und 40 Meter - by DL7AWL  
	http://www.dl7awl.de/loop.htm
- Magnetic Loop-Antennas - WiMo Antenna Ltd.  
	http://www.wimo.com/
- Magnetic Loop Antenna - A Magnetic Loop by 7N3WVM  
	http://www.qsl.net/7n3wvm/mag-loop.html
- My magnetic loop antenna - A Cool Apartment Loop by KR1ST  
	http://www.kr1st.com/magloop.htm
- A Portable Magnetic Loop Antenna - by G4FON  
	http://www.qsl.net/g4fon/MagLoop.htm
- Magnetic loop antenna - by HB9ABX  
	http://home.datacomm.ch/hb9abx/loop1-e.htm
- ML-90 Vehicle Roof Rack Magnetic Loop Antennas - Q-MAC Electronics  
	http://www.worldsecurity-index.com/images/qmac/pdf/ML-90%20Vehicle%20HF.pdf
- W6OAV'S LOOP - Looks like a box fan.  
	http://www.w0ql.com/w6oavloop.html
- Small loop antennas (magnetic loops) - by G4HJW  
	http://www.g4hjw.metahusky.net/magloops.htm
- VHF Antenna in a Lunchbox - The Magnetic Loop on Two Metres, by Lloyd Butler VK5BR  
	http://www4.tpgi.com.au/users/ldbutler/VHFLoopAntenna.htm
- A Small Transmitting Loop Antenna for 14MHz and 21MHz - by Lloyd Butler VK5BR  
	http://www4.tpgi.com.au/users/ldbutler/HFTXLoop.htm
- Magnetic Loop - My Projects, by EA5XQ  
	http://ea5xq.net/2001/02/26/antena-magnetica/
- Magnetische Antennen - by DL7JV  
	http://www.qsl.net/dl7jv/e.mag.htm
- Adventures in Stealth Radio - by Art Heft  
	http://www.standpipe.com/w2bri/article1.htm
- Magnetic Loop Antenna - LA6NCA  
	http://www.laud.no/la6nca/loop/
- Portable HF Transmitting Loop Antenna - by N5IZU  
	http://dt.prohosting.com/hacks/antenna/magloop.html
- Experiences with Loop antennas - by G3YMC  
	http://www.davesergeant.com/loops.htm
- Antenna Projects and More... - by HB9MTN  
	http://www.qsl.net/hb9mtn/
- Loop Antenna - by I3VHF  
	http://www.ciromazzoni.com/Loop%20Antenna.htm
- I3VHF - Baby Loop Antenna - A small loop antenna on Charlie Ho's, VR2XMT, blog.  
	http://vr2xmt.blogspot.com/2008/07/i3vhf-baby-loop-antenna.html
- French Site - by F5NGZ  
	http://qrpfr.free.fr/?2006/04/14/20-antenne-cadre-par-f5ngz
- PE2FOX - Some good magnetic loop photos.  
	http://s27.photobucket.com/albums/c188/pe2fox/Loopantenne/
- The Midnight Loop - by G. Heron, N2APB & J. Everhart, N2CX  
	http://midnightdesignsolutions.com/MidnightLoop/Midnight%20Loop%20(Mar%2011a).pdf

  

---

  

### 参考资料

\[1\] Barrick, D. (Jan 1986). "Miniloop Antenna Operation and Equivalent Circuit". Antennas and Propagation, IEEE Transactions on. (pp. 111-114). Vol. 34, Issue 1.
\[2\] Belrose, J.S. (2005). "Electrically Small Transmitting Loops". Antennas and Propagation Society International Symposium, 2005 IEEE. (pp. 29-32). Vol. 1B.
\[3\] Boswell, A., Tyler, A.J.and White, A. (April 2005). "Performance of a Small Loop Antenna in the 3-10 MHz band". Antennas and Propagation Magazine. In IEEE. (pp. 51-56). Vol. 47, Issue 2
\[4\] Burberry, R.A. (23 Oct 1990). "Electrically Small Antennas: A Review". Electrically Small Antennas, IEE Colloquium on. (pp. 1/1- 1/5).
\[5\] Kraus, John D. (1984). "The Small Loop Antenna". In McGraw-Hill (3rd ed.). Electromagnetics. (pp. 665-666).
\[6\] Kraus, John D. and Marhefka, Ronald J. (2002). "The Loop Antenna". In McGraw-Hill (3rd ed.). Antennas For All Applications (pp. 197-221). chap. 7.
\[7\] The American Radio Relay League (1988). "Small High Efficiency Loop Antennas for Transmitting". The ARRL Antenna Handbook. In (15th ed.). (pp. 5-14). Table 4.
\[8\] K. Siwiak, KE4PT and R. Quick, W4RQ, “Small Gap-resonated HF Loop Antenna”, QST, Sep. 2018, (pp. 30–33).


<译完>  

