---
lang: cn
id: wug_alertcenter
title: WhatsUp Gold AlertCenter
author: Jerry
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/guide/ug_wug_alertcenter
---

## 准备
1. 可启用POP3服务之Mail Server乙台
2. 已开启POP3服务之"全新"帐号

## 设定
点击左方服务整合查看服务项目清单 -> WUG AlertCenter进入设定页面。
![](../../img/doc/integration_dir.png)

将POP3设定切换为启用，并输入连线资讯(以gmail为例)，并依需求确认是否开启SSL/TLS功能。
![](../../img/doc/pop3_1.png)

点击测试连线确保连线畅通，并储存设定即可

## 文字讯息格式
Signaal 将Email转换成通讯软体告警时，使用Email主旨(Subject)作为依据产生相应的通知发送，格式如下：
```
signaal:{
  "srcs": [{"src": "YOU_WANT_TO_RECEIVE_APP"}...],
  "groups": [{"group": "YOUR_GROUP_NAME"}...],
  "content": "YOUR_MESSAGE"
}
```
* `YOU_WANT_TO_RECEIVE_APP`: 欲发送讯息之平台。可为:`sms`/`whatsapp`/`line`/`messenger`/`viber`/`telegram`/`wechat`
* `YOUR_GROUP_NAME`: 欲通知群组
* `YOUR_MESSAGE`: 讯息内容，支援[WhatsUp Gold 百分比变数](https://docs.ipswitch.com/NM/WhatsUpGold2019/03_Help/1033/index.htm?42503.htm?toc.htm)

同时发送LINE与Telegram至群组test_group之范例：

```
signaal:{
  "srcs": [{"src": "line"}, {"src": "telegram"}],
  "groups": [{"group": "test_group"}],
  "content": "%AlertCenter.Threshold.NewItemNames %AlertCenter.Threshold.Name"
}
```

## 语音讯息格式
Signaal 将Email转换成语音告警时，使用Email主旨(Subject)作为依据产生相应的通知发送，格式如下：

```
signaal:{
  "srcs": [{"src": "audio"}],
  "groups": [{"group": "YOUR_GROUP_NAME"}...],
  "bucket": "YOUR_BUCKET",
  "fileName": "YOUR_FILE_NAME"
}
```
* `YOUR_GROUP_NAME`: 欲通知群组
* `YOUR_BUCKET`: 欲传送语音之储存桶名称，可于服务整合->语音通知中查看
* `YOUR_FILE_NAME`: 欲传送语音之档案名称，可于服务整合->语音通知中查看


发送语音通知至群组test_group之范例：

```
signaal:{
  "srcs": [{"src": "audio"}],
  "groups": [{"group": "test_group"}],
  "bucket": "bucket",
  "fileName": "example.mp3"
}
```

更多讯息格式请参考[请求](ug_request)