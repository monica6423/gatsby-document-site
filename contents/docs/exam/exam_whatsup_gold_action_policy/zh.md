---
lang: zh
id: whatsup_gold_action_policy
title: 整合WhatsUp Gold 動作與政策
author: Justin
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/exam/exam_whatsup_gold_action_policy
---

## Step0: 環境準備

-   已安裝WhatsUp Gold之主機
-   WhatsUp Gold之主機與Signaal之主機連線暢通(預設連接阜為8000)
-   Signaal之主機對外網路連線暢通

## Step1: 設定Signaal使用者。

-   新增使用者，取得並設定使用者ID，請依需求參閱“發送第一封測試訊息”文件。

## Step2: 設定Signaal群組

-   將對應的使用者加入群組中。
    ![](../../img/doc/example1.png)
     ![](../../img/doc/example1.1.png)
      ![](../../img/doc/example1.2.png)

## Step3: 產生告警Script

-   使用Script產生器產生Script，複製Script並於下一步驟中使用，請參閱使用指南-Script產生器。

## Step4: 新增WhatsUp Gold動作資料庫
-   進入動作與政策設定頁面。
    ![](../../img/doc/gs_exam_wug1.png)

-   於下方動作資料庫點選新增→動態指令碼動作。
    ![](../../img/doc/gs_exam_wug2.png)

-   選擇指令碼類型(T): VBScript，並將上一步驟產生之Script複製至下方指令碼文字(S)中。
    ![](../../img/doc/gs_exam_wug3.png)

## Step5: 設定WhatsUp Gold動作政策
-   進入動作與政策設定頁面。
    ![](../../img/doc/gs_exam_wug1.png)

-   於上方新增動作政策。
    ![](../../img/doc/gs_exam_wug4.png)

-   點擊加入，並在動作資料庫中選擇 Signaal Alert。
    ![](../../img/doc/gs_exam_wug5.png)

-   查看設定並點擊確定。
    ![](../../img/doc/gs_exam_wug6.png)

## Step6: 設定WhatsUp Gold主動監控工具

-   在需告警裝置底下新增主動監控工具(以echo為例)。
    ![](../../img/doc/example6.png)


-   使用預設網路介面設定。
    ![](../../img/doc/example7.png)

-   選擇政策Signaal Policy。
    ![](../../img/doc/gs_exam_wug7.png)

-   確認設定並按下完成。
    ![](../../img/doc/gs_exam_wug8.png)

## Step7: 收到警告訊息

-   當觸發告警時，便會透過通訊軟體接受告警資訊。
    ![](../../img/doc/example10.png)

