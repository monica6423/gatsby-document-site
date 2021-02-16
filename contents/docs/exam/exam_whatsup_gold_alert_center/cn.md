---
lang: cn
id: whatsup_gold_alert_center
title: 整合WhatsUp Gold-AlertCenter
author: Alson
type: post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/get-started/exam_whatsup_gold_alert_center
---

## Signaal Alert Center需求
- Mail Server需支援POP3功能。
- 全新信箱帐号。

## Signaal 设定
### Step1: 登入操作页面
开启Signaal Web操作页面，并输入帐号密码登入。
### Step2: 设定Signaal使用者
新增使用者，取得并设定使用者ID，请参阅User Guide
![](../../img/doc/alertpolicy1.png)
### Step3: 设定Signaal群组
将使用者加入群组group中
![](../../img/doc/alertpolicy2.png)
### Step4: 进入设定页面
于左方侧边栏点击`服务与整合`，并选择`WUG AlertCenter`。

![](../../img/doc/center15.png)
### Step5: 填写设定资讯
输入邮件伺服器以及通讯埠，输入邮件帐号及密码。

![](../../img/doc/center16.png)
### Step6: 测试
点击测试连线确保连线畅通
### Step7: 储存
点击储存以保存设定
--------------------------------------------------
## WhatsUp Gold 设定
### Step1: 登入操作页面
输入WhatsUp Gold IP开启操作页面，并输入帐号密码进行登入。
![](../../img/doc/center00.png)
### Step2: 进入警报中心资料库
点击上方设定 -> 动作与警报 -> 警报中心资料库。
![](../../img/doc/center01.png)
### Step3: 新增警报通知
进入通知分页，并点选新增。

![](../../img/doc/center1.png)
### Step4: 新增通知类型
选择类型E-mail Action，并点选确定

![](../../img/doc/center2.png)
### Step4: 新增电子邮件动作
输入名称、SMTP伺服器、收件人与寄件人。

![](../../img/doc/center3.png)

![](../../img/doc/center4.png)

点击下方警报中心设定值。

![](../../img/doc/center5.png)

输入主旨(请参考"请求"介绍)。

![](../../img/doc/center6.png)

点击确定，将设定储存。
## 收到告警
### 接收Email告警
当设备触发告警时，将会寄送Email至指定信箱
![](../../img/doc/center14.png)
### 接收Signaal告警(以LINE为例)
于LINE上接收告警。
![](../../img/doc/center17.png)

--------------------------------------------------
## Email 主旨设定
### 主旨格式
```
signaal: {
  "srcs":[{"src":"YOUR_NOTIFY_APP"}],
  "groups":[{"group":"YOUR_NOTIFY_GROUP"}],
  "content": "YOUR_NOTIFY_MESSAGE",
  "ack": true
}
```
### 范例 (以LINE为例)
发送LINE告警到group群组范例
```
signaal: {
  "srcs":[{"src":"line"}],
  "groups":[{"group":"group"}],
  "content": "Your Message",
  "ack": true
}
```

更多主旨样板可参[请求](ug_request)