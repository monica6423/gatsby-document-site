---
lang: zh
id: whatsup_gold_alert_center
title: WhatsUp Gold AlertCenter
author: Alson
type: post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/exam/exam_whatsup_gold_alert_center
---

## Signaal Alert Center requirements
- Mail Server needs to support POP3 function.
- New mailbox account.

## Signaal Setting
### Step1: Login operation page
Open the Signal Web operation page and enter the account password to log in.
### Step2: Set up Signaal users
Add user, get and set user ID, please refer to User Guide.
![](../../img/doc/alertpolicy1.png)
### Step3: Set up a Signaal group
Add users to the group group
![](../../img/doc/alertpolicy2.png)
### Step4: Enter the settings page
Click `Services and Integration` on the left sidebar, and select `WUG AlertCenter`.

![](../../img/doc/center15.png)
### Step5: Fill in the setting information
Enter the mail server and communication port, enter the mail account and password.
![](../../img/doc/center16.png)
### Step6: Test
Click Test Connection to make sure the connection is smooth.
### Step7: Save
Click Save to save the settings


## WhatsUp Gold Setting
### Step1: Login operation page
Open the WhatsUp Gold operation page and enter the account password to log in.
### Step2: New alert notification
Click Settings above -> Actions and Alarms -> Alarm Center Database, enter the notification tab, and click Add.
![](../../img/doc/center1.png)
### Step3: New notification type
Select the type E-mail Action, and click OK
![](../../img/doc/center2.png)
### Step4: Add email action
Enter the name, SMTP server, recipient and sender.
![](../../img/doc/center3.png)
![](../../img/doc/center4.png)
Click the alarm center setting value below.
![](../../img/doc/center5.png)
Enter the subject (please refer to the Email subject setting below)
![](../../img/doc/center6.png)
Click OK to save the settings.
## Receive an alert
### Receive email alerts
When the device triggers an alarm, it will send an Email to the designated mailbox
![](../../img/doc/center14.png)
### Receive Signal alarm (take LINE as an example)。     
![](../../img/doc/center17.png)
--------------------------------------------------
## Email Subject setting
### Subject format
```
signaal: {
  "srcs":[{"src":"YOUR_NOTIFY_APP"}],
  "groups":[{"group":"YOUR_NOTIFY_GROUP"}],
  "content": "YOUR_NOTIFY_MESSAGE",
  "ack": true
}
```
### Example (take LINE as an example)
Send LINE alerts to the theme template in the group
```
signaal: {
  "srcs":[{"src":"line"}],
  "groups":[{"group":"group"}],
  "content": "Your Message",
  "ack": true
}
```

More subject templates can be found in [Request](ug_request)
