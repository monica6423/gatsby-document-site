---
lang: cn
id: netapp_integration
title: 整合NetApp
author: Jerry
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/exam/exam_netapp_integration
---

## Step0: 环境准备

- 已安装NetApp Active IQ之主机
- NetApp Active IQ之主机与Signaal之主机连线畅通(预设连接阜为8000)
- Signaal之主机对外网路连线畅通

## Step1: 设定Signaal使用者。

- 新增使用者，取得并设定使用者ID，请参阅使用指南

## Step2: 设定Signaal群组

- 将使用者加入群组TEST中。
    ![](../../img/doc/example1.png)

## Step3: 产生告警Script

- 使用Script产生器产生Script，取得script.ps1，请参阅使用指南-Script产生器

## Step4: 新增Script至NetApp脚本
- 登入NetApp Active IQ
- 于左方→储存管理→脚本，进入脚本页面
    ![](../../img/doc/gs_exam_na1.png)


- 新增脚本
    ![](../../img/doc/gs_exam_na2.png)

## Step4: 设定NetApp警报设置

- 于左方→储存管理→警报设置，进入警报设置页面
    ![](../../img/doc/gs_exam_na3.png)


- 新增警报
    ![](../../img/doc/gs_exam_na4.png)

- 建立警报条件(以Events为例)
    ![](../../img/doc/gs_exam_na5.png)

- 设定警报动作
    ![](../../img/doc/gs_exam_na6.png)

## Step5: 收到警告讯息

- 当触发告警时，便会透过通讯软体接受告警资讯(以进入维护模式讯息为例)。
    ![](../../img/doc/gs_exam_na8.png)