---
lang: en
id: script
title: Script Generator
author: Jerry
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/guide/ug_script
---

## Authentication
### Set connection information
-   Signaal must provide a set of account passwords for authentication when calling from outside.
-   Please create or use an existing API_SENDER user with permission management separately as an external calling account, do not use the administrator account.

    ![](../../img/doc/script1.png)


### Test
-   After entering the information, click the test `connection button`, the test result will be displayed on the right side of the screen.

## Notification group
-   Set up the receiving group and the communication medium for receiving messages

    ![](../../img/doc/script2.png)


## Notification message
### Text message
-   The built-in message template can quickly help you set the message content, and it also supports changing the template.
-   WhatsApp message restrictions, please refer to [WhatsApp-message template](ug_whatsapp)

    ![](../../img/doc/script3.png)


### Voice message
-   Set the voice file to be played when the alarm is sent.
-   Please refer to [Voice Notification](ug_audio) for voice file creation

## Generate code
-   Select the language you want to generate and click Generate Code to get the customized alarm code.

    ![](../../img/doc/script4.png)