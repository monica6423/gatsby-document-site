---
lang: zh
id: teams
title: Teams
author: Jerry
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/guide/ug_teams
---

## 在Teams中新增Signaal應用

使用管理權限帳號開啟Microsoft Teams

點擊左方應用程式

![](../../img/doc/teams.png)

點擊上傳自訂應用程式，上傳SignaalTeams應用
SignaalTeams應用位於安裝Signaal目錄中lib資料夾底下，預設為`C:\Program Files (x86)\Signaal\lib`

![](../../img/doc/teams.png)

點擊上方Signaal圖示，選取下拉選單->新增至團隊，並選擇欲設定之頻道

![](../../img/doc/teams.png)

## 設定
進入Signaal，點擊左方服務整合查看服務項目清單
![](../../img/doc/integration_dir.png)
點擊Teams進入設定頁面

## 取得 Signaal ID

在Signaal使用者設定中，每一種通訊軟體都需要使用者填寫資訊，才能與通訊軟體進行連結，而每一種通訊軟體都有各自不同的連結碼，輸入正確的連結碼，Signaal即可進行訊息傳送。

本篇將會進行設定操作，教導如何取得通訊軟體連結碼，與通訊軟體進行連結。以下操作需先行完成上述步驟`在Teams中新增Signaal應用`。

### 方法一：快速設定

請使用者開啟通訊軟體，至有加入Signaal應用之頻道標記Signaal後，輸入`/token KT**VB`(註：服務整合功能查看)。

![](../../img/doc/teams.png)

管理者在Signaal使用者設定畫面即可看到User已被新增。

![](../../img/doc/teams.png)

### 方法二：手動設定

請使用者開啟通訊軟體，至有加入Signaal應用之頻道標記Signaal後，輸入:`/token`即可取得Teams連結碼

![](../../img/doc/teams.png)

至使用者頁面，選擇新增至新使用者或者現有使用者，輸入或選擇使用者名稱，並將連結碼填寫至ID欄位。

![](../../img/doc/teams.png)

完畢後，點選新增即可。
