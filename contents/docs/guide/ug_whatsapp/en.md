---
lang: en
id: whatsapp
title: WhatsApp
author: Justin
sidebar: Docs
type : post
showTitle: true
hideAnchor: false
slug: /docs/guide/ug_whatsapp
---

## Set up

Click on Service Integration on the left to view the list of service items
![](../../img/doc/integration_dir.png)

Click WhatsApp to enter the setting page

![](../../img/doc/whatsapp1.png)

Please select the country code, and enter the phone number below and click Add.

## WhatsApp message template

To prevent spam messages in the system from being pushed, WhatsApp needs to create a template to send it to users. If a non-model message is sent, WhatsApp will not accept the message. Therefore, Signal has created several samples for application. If you have additional requirements, you can [contact us](/help).

### Default message template  
* English:

		Monitor:%ActiveMonitor.Name\nDisplayName:%Device.DisplayName\nIP-Address:%Device.Address\nstatus:%Device.State
### Active monitoring tool template(Device)  
* English:

		Device Name: %Device.DisplayName (%Device.HostName)\nDevice IP: %Device.Address\nDevice Status: %Device.State\nDown Active Monitor: %Device.ActiveMonitorDownNames
* Chinese:

		設備名稱：%Device.DisplayName (%Device.HostName)\n設備ＩＰ：%Device.Address\n設備狀態：%Device.State\n離線監控工具：%Device.ActiveMonitorDownNames

### Active monitoring tool template(Monitor)  
* English:

		Device Name: %Device.DisplayName (%Device.HostName)\nDevice IP: %Device.Address\nActive Monitor: %ActiveMonitor.Name(%ActiveMonitor.Argument) %ActiveMonitor.Comment\nStatus: %ActiveMonitor.State
* Chinese:

		設備名稱：%Device.DisplayName (%Device.HostName)\n設備ＩＰ：%Device.Address\n監控工具名稱：%ActiveMonitor.Name(%ActiveMonitor.Argument) %ActiveMonitor.Comment\n監控工具狀態：%ActiveMonitor.State

### Application Monitoring Module Template  
* English:

		Device Name: %Device.DisplayName (%Device.HostName)\nDevice IP: %Device.Address\nApplication: %Application.ApplicationInstance.ApplicationName\nComponent: %Application.TriggeringComponent.Name\nStatus: %Application.TriggeringComponent.CurrentState\nValue: %Application.TriggeringComponent.CurrentValue\nThreshold: %Application.TriggeringComponent.ThresholdConfiguration
* Chinese:

		設備名稱：%Device.DisplayName (%Device.HostName)\n設備ＩＰ：%Device.Address\n應用程式：%Application.ApplicationInstance.ApplicationName\n元件名稱：%Application.TriggeringComponent.Name\n元件狀態：%Application.TriggeringComponent.CurrentState\n現在輪詢值：%Application.TriggeringComponent.CurrentValue\n臨界值設定：%Application.TriggeringComponent.ThresholdConfiguration

### Passive monitoring tool template  
* English:

		Device Name: %Device.DisplayName (%Device.HostName)\nDevice IP: %Device.Address\nEvent Name: %PassiveMonitor.DisplayName
* Chinese:

		設備名稱：%Device.DisplayName (%Device.HostName)\n設備ＩＰ：%Device.Address\n事件名稱：%PassiveMonitor.DisplayName

### Performance monitor tool template  
* English:

		Device Name: %AlertCenter.Threshold.NewItemNames\nThreshold: %AlertCenter.Threshold.Name
* Chinese:

		設備名稱：%AlertCenter.Threshold.NewItemNames\n告警項目：%AlertCenter.Threshold.Name
