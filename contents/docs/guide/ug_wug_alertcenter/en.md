---
lang: en
id: wug_alertcenter
title: WhatsUp Gold AlertCenter
author: Jerry
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/guide/ug_wug_alertcenter
---

## Prepare
1. One Mail Server with POP3 service enabled
2. Account with POP3 service enabled (clean account is better)

## Set up
Click Service Integration on the left to view the list of service items -> WUG AlertCenter to enter the setting page.
![](../../img/doc/integration_dir.png)

Switch the function to enable and enter the connection information (take gmail as an example)
![](../../img/doc/pop3_1.png)

Click Test Connection to make sure the connection is smooth, and save the settings

## Text message format
When Signaal converts the email into a communication software alarm, it uses the email subject as the basis to generate the corresponding notification and send it in the following format:
```
signaal:{
  "srcs": [{"src": "YOU_WANT_TO_RECEIVE_APP"}...],
  "groups": [{"group": "YOUR_GROUP_NAME"}...],
  "content": "YOUR_MESSAGE"
}
```
* `YOU_WANT_TO_RECEIVE_APP`: The platform to send the message. Can be: `sms`/`whatsapp`/`line`/`messenger`/`viber`/`telegram`/`wechat`
* `YOUR_GROUP_NAME`: To notify the group
* `YOUR_MESSAGE`: message content, support [WhatsUp Gold percentage variable](https://docs.ipswitch.com/NM/WhatsUpGold2019/03_Help/1033/index.htm?42503.htm?toc.htm)

Example of sending LINE and Telegram to the group test_group at the same time:

```
signaal:{
  "srcs": [{"src": "line"}, {"src": "telegram"}],
  "groups": [{"group": "test_group"}],
  "content": "%AlertCenter.Threshold.NewItemNames %AlertCenter.Threshold.Name"
}
```

## Voice message format
When Signaal converts the Email into a voice alarm, it uses the Email subject as the basis to generate the corresponding notification and send it in the following format:

```
signaal:{
  "srcs": [{"src": "audio"}],
  "groups": [{"group": "YOUR_GROUP_NAME"}...],
  "bucket": "YOUR_BUCKET",
  "fileName": "YOUR_FILE_NAME"
}
```
* `YOUR_GROUP_NAME`: To notify the group
* `YOUR_BUCKET`: The name of the bucket where you want to send voice, you can view it in Service Integration -> Voice Notification
* `YOUR_FILE_NAME`: The name of the file you want to send voice to, you can view it in Service Integration -> Voice Notification


Example of sending voice notification to the group test_group:

```
signaal:{
  "srcs": [{"src": "audio"}],
  "groups": [{"group": "test_group"}],
  "bucket": "bucket",
  "fileName": "example.mp3"
}
```

For more message format, please refer to [Request](ug_request)
