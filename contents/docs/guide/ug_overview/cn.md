---
lang: cn
id: overview
title: 功能导览
author: Justin
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/guide/ug_overview
---

![](../../img/doc/1.png)

## 登入介面

- 当序号在安装后启用完成时，再点击ICON即可开始使用
    ![](../../img/doc/2.png)
预设登入帐号密码为admin

- 开启选单后，登入后请点击右上方User-\>设定，先进行密码的更换
    ![](../../img/doc/3.png)

- 此页面提供使用者显示名称、密码、以及预设语言的更换
    ![](../../img/doc/4.png)
请于更换完成之后记得点选更换键以保存设定。

## 功能选单

- 画面左侧为所有功能选单，点选已展开选单列出所有功能项目
    ![](../../img/doc/5.png)

## 仪表板

- 开启选单后点击左方仪表板选项即可观看仪表板，仪表板上可以检视所有告警状况以及ACK情形、回应率、SMS使用率与序号等等资讯。
   ![](../../img/doc/dashboard1.png)
![](../../img/doc/dashboard2.png)
![](../../img/doc/dashboard3.png)
![](../../img/doc/dashboard4.png)
![](../../img/doc/dashboard5.png)

## 授权

- 开启选单后，点击左侧关于选项即可检视目前授权状况，并可于其他栏位查看使用者协议，如何启用序号以及授权更新请参考[安装说明](install)
    ![](../../img/doc/license.png)

## 权限管理

- 点选权限管理即可进行signaal管理者帐号的新增/修改
    ![](../../img/doc/authority.png)

- 点击新增可新增管理者
    ![](../../img/doc/authority2.png)

管理者分为四种类型，对应的权限为：

**ADMIN** : 拥有所有权限

**API_SENDER**: API发送者，无web权限

**WEB_ADMIN**: 拥有最高权限，但无系统权限包含：

- 重新启动服务
- 更动日志等级
- 更换凭证

**READER**: 仅有仪表板读取权限

## 使用者

- 开启选单后，点选左侧使用者进行使用者编辑
    ![](../../img/doc/user_sitebar.png)

- 点选新增按键以新增使用者
    ![](../../img/doc/user_detail.png)
- 下方提供使用者汇入以及汇出的功能
    ![](../../img/doc/user_sitebar.png)

- 其中以.CSV档案格式汇入/汇出使用者内容
![](../../img/doc/import_user.png)

## 群组

- 开启选单后，点击群组更改群组设定
    ![](../../img/doc/group_sitebar.png)

- 群组新增
    ![](../../img/doc/15.png)

- 请在上方群组名称输入欲设定名称。

- 中间提供按键可以新增一笔、新增多笔、移除一笔、移除多笔。

- 请于编辑完后点选储存以保留设定。
- 下方提供群组汇入以及汇出的功能
    ![](../../img/doc/group_sitebar.png)

- 其中以.CSV档案格式汇入/汇出群组内容
![](../../img/doc/import_group.png)

## 服务整合

- 开启选单后，点选服务整合可以设定所有告警选项以及查看服务如何整合说明。
    ![](../../img/doc/exam_3_integration.png)


## 系统

- 开启选单后，点击系统可调整日志搜集等级(Logging Level)
    ![](../../img/doc/system1.png)

- 若有系统错误建议在Trouble Shooting时将日志等级更改为Debug，请于更改完成时点击储存。

- 可勾选是否启用SSL/TLS。

- 可在此汇入SSL Certificate
    ![](../../img/doc/system2.png)

请于汇入完成时点选提交，提交完成后请重新启动服务。

- 服务重启
    ![](../../img/doc/20.png)
若进行系统变更时，可在此系统页面执行服务的重新启动。