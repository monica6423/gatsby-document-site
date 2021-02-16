---
lang: zh
id: activation
title: 啟用產品
author: Jerry
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/get-started/gs_activation
---

## 取得序號
申請序號後，於信箱中將會收到序號與下載連結
*![](../../img/doc/install_offline3.png)

## 線上序號啟動
![](../../img/doc/install9.png)
進入啟動頁面(`http://localhost:8000/#/active-step`)
輸入序號即可完成啟動。

## 離線序號啟動
於電子信箱中開啟信件，並點擊`開啟Active Form`
![](../../img/doc/install_offline1.png)

在啟用表單中輸入license Key（許可證密鑰）和 machine code
![](../../img/doc/install_offline2.png)

提交Active form並將其保存在電腦中，下個步驟將需要
![](../../img/doc/install_offline5.png)

進入啟動頁面(`http://localhost:8000/#/active-step`)
上傳產品啟用檔即可完成啟用。
![](../../img/doc/install_offline6.png)

## 取得 machine code
* machine code位於安裝設備的終端機 ( 快捷鍵: `WIN + S`, 並輸入`cmd`)
在終端機裡輸入: `cmd.exe /C wmic csproduct get uuid`
*![](../../img/doc/install_offline4.png)
