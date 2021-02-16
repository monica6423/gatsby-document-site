---
lang: zh
id: whatsapp
title: WhatsApp
author: Justin
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/guide/ug_whatsapp
---

## 設定

點擊左方服務整合查看服務項目清單
![](../../img/doc/integration_dir.png)

點擊WhatsApp進入設定頁面

![](../../img/doc/whatsapp1.png)

請選擇國家地區代碼，並在下方輸入手機號碼點選新增即可。

## WhatsApp 訊息模板

基於避免系統中的垃圾訊息得推送，WhatsApp需要透過建立樣板才可以對用戶進行發送，若發送非樣板訊息，WhatsApp將不受理該訊息。因此Signaal已先建立幾種樣版提供套用，如有額外需求可以[聯繫我們](/help)。

### 預設訊息模板
* 英文:

		Monitor:%ActiveMonitor.Name\nDisplayName:%Device.DisplayName\nIP-Address:%Device.Address\nstatus:%Device.State
### 主動監控工具模板(裝置)
* 英文:

		Device Name: %Device.DisplayName (%Device.HostName)\nDevice IP: %Device.Address\nDevice Status: %Device.State\nDown Active Monitor: %Device.ActiveMonitorDownNames
* 中文:

		設備名稱：%Device.DisplayName (%Device.HostName)\n設備ＩＰ：%Device.Address\n設備狀態：%Device.State\n離線監控工具：%Device.ActiveMonitorDownNames

### 主動監控工具模板(監控)
* 英文:

		Device Name: %Device.DisplayName (%Device.HostName)\nDevice IP: %Device.Address\nActive Monitor: %ActiveMonitor.Name(%ActiveMonitor.Argument) %ActiveMonitor.Comment\nStatus: %ActiveMonitor.State
* 中文:

		設備名稱：%Device.DisplayName (%Device.HostName)\n設備ＩＰ：%Device.Address\n監控工具名稱：%ActiveMonitor.Name(%ActiveMonitor.Argument) %ActiveMonitor.Comment\n監控工具狀態：%ActiveMonitor.State

### 應用程式監控模組模板  
* 英文:

		Device Name: %Device.DisplayName (%Device.HostName)\nDevice IP: %Device.Address\nApplication: %Application.ApplicationInstance.ApplicationName\nComponent: %Application.TriggeringComponent.Name\nStatus: %Application.TriggeringComponent.CurrentState\nValue: %Application.TriggeringComponent.CurrentValue\nThreshold: %Application.TriggeringComponent.ThresholdConfiguration
* 中文:

		設備名稱：%Device.DisplayName (%Device.HostName)\n設備ＩＰ：%Device.Address\n應用程式：%Application.ApplicationInstance.ApplicationName\n元件名稱：%Application.TriggeringComponent.Name\n元件狀態：%Application.TriggeringComponent.CurrentState\n現在輪詢值：%Application.TriggeringComponent.CurrentValue\n臨界值設定：%Application.TriggeringComponent.ThresholdConfiguration

### 被動監控工具模板
* 英文:

		Device Name: %Device.DisplayName (%Device.HostName)\nDevice IP: %Device.Address\nEvent Name: %PassiveMonitor.DisplayName
* 中文:

		設備名稱：%Device.DisplayName (%Device.HostName)\n設備ＩＰ：%Device.Address\n事件名稱：%PassiveMonitor.DisplayName

### 效能監控工具模板
* 英文:

		Device Name: %AlertCenter.Threshold.NewItemNames\nThreshold: %AlertCenter.Threshold.Name
* 中文:

		設備名稱：%AlertCenter.Threshold.NewItemNames\n告警項目：%AlertCenter.Threshold.Name
