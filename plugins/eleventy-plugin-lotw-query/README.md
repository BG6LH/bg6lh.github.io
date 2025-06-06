# eleventy-plugin-lotw-query
This plugin adds a shortcode for querying the [Logbook of the World](https://lotw.arrl.org)

## 目标

- [Logbook of the World](https://lotw.arrl.org) 是一个给全世界业余无线电台设计的通联确认QSL工具。
- 我希望做一个node.js的插件，可以用在11ty、vuepress等项目上。
	- 提供一个简单的查询接口，查询并展示某个LOTW账户的：已通联（QSO、worked）和已确认（QSL、confrimed）的实体总数。
	- 提供一个安全的密码保存机制。考虑到网站托管环境，避免硬编码、向公众泄露用户名和密码
	- 提供一套模板渲染机制，按需求定制更复杂的查询结果

## 背景信息
- [Logbook of the World](https://lotw.arrl.org)提供了一系列奖项统计。
- 以DXCC为例，用户可以查询他累计的积分。
- LoTW 在 [https://lotw.arrl.org/lotwuser/lotwreport.adi](https://lotw.arrl.org/lotwuser/lotwreport.adi)上提供了一个 Web 服务 ，该服务接受[RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer)查询，报告满足指定条件的 QSO：
- 每个查询都是一个 HTTP "GET" 字符串，其格式符合标准 URL 要求（例如[RFC1738](https://www.rfc-editor.org/rfc/rfc1738.txt)）。查询 URL 示例如下：
	https://lotw.arrl.org/lotwuser/lotwreport.adi?login=ke3z&password=notmypass&qso_query=1_
- 然后lotw.arrl.org完成查询返回一个ADIF格式的结果。

## 开发者文档

- LOTW提供了开发者查询接口 [Information for Application Developers](https://lotw.arrl.org/lotw-help/developer-information/)
- 最新的DXCC实体代码：[https://www.arrl.org/files/file/DXCC/2013_Current_Deleted.txt](https://www.arrl.org/files/file/DXCC/2013_Current_Deleted.txt)
- 关于ADIF格式标准： https://www.adif.org.uk/

## 详细功能

- 可以指定我的呼号
	- 默认输出的是login账户绑定的所有呼号的QSO
	- 可以通过qso_owncall 指定通联使用的呼号
	- lotw不可指定一个呼号组，所以一次只支持一个呼号

- 查询起始时间：
	- 预先定义一个查询起始时间，所有查询的起点
	- 可以通过 `qso_qsorxsince` 指定一个所有QSO记录的时间
	- 比如 `qso_qsorxsince=2018-01-01`
	
- 每次，通过LOTW的查询接口，获取查询起始时间至今的全部QSO/QSL记录，并计算查询结果内的DXCC实体数量。
	- 每次查询后，在本地保存一个my-lotw-qso.adif文件
	- 从第二次查询开始，新查询结果覆盖老文件，并将老文件备份。

- 在本地生成一个json表：
	- 记录查询起始时间 `qso_qsorxsince`
	- 最后一次（上次）查询时间`qso_lastquerydatetime`, 具体的YYYY-MM-DD HH:MM:SS
	- 并创建一个有340条dxcc实体记录的表，相应的字段是每一个dxcc实体对应的QSO数量，QSL数量

- 基本展示：
	- 统计有QSO记录的实体的数量（不是QSO总数，是有QSO的实体的总数）作为DXCC worked 的数量
	- 统计有QSL记录的实体的数量，作为DXCC confirmed的数量
	- 对外展示 confirmed 和 worked 的数量


