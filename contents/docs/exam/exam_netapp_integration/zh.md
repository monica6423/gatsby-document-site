---
lang: zh
id: netapp_integration
title: 整合NetApp
author: Jerry
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/exam/exam_netapp_integration
---

## Step0: 環境準備

-   已安裝NetApp Active IQ之主機
-   NetApp Active IQ之主機與Signaal之主機連線暢通(預設連接阜為8000)
-   Signaal之主機對外網路連線暢通

## Step1: 設定Signaal使用者。

-   新增使用者，取得並設定使用者ID，請參閱使用指南

## Step2: 設定Signaal群組

-   將使用者加入群組TEST中。
    ![](../../img/doc/example1.png)

## Step3: 產生告警Script

-   使用Script產生器產生Script，取得script.ps1，請參閱使用指南-Script產生器

## Step4: 新增Script至NetApp腳本
-   登入NetApp Active IQ
-   於左方→儲存管理→腳本，進入腳本頁面
    ![](../../img/doc/gs_exam_na1.png)


-   新增腳本
    ![](../../img/doc/gs_exam_na2.png)

## Step4: 設定NetApp警報設置

-   於左方→儲存管理→警報設置，進入警報設置頁面
    ![](../../img/doc/gs_exam_na3.png)


-   新增警報
    ![](../../img/doc/gs_exam_na4.png)

-   建立警報條件(以Events為例)
    ![](../../img/doc/gs_exam_na5.png)

-   設定警報動作
    ![](../../img/doc/gs_exam_na6.png)

## Step5: 收到警告訊息

-   當觸發告警時，便會透過通訊軟體接受告警資訊(以進入維護模式訊息為例)。
    ![](../../img/doc/gs_exam_na8.png)