---
lang: en
id: netapp_integration
title: NetApp Integration
author: Jerry
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/exam/exam_netapp_integration
---

## Step0: Environmental preparation

-   Host with NetApp Active IQ installed
-   The connection between the NetApp Active IQ host and the Signalal host is smooth (the default connection port is 8000)
-   Signaal's host has a smooth external network connection

## Step1: Set up Signaal user.

-   Add user, obtain and set user ID, please refer to the user guide

## Step2: Set up the Signal group

-   Add users to the group TEST.
    ![](../../img/doc/example1.png)

## Step3: Generate alarm script

-   Use the Script generator to generate Script, get script.ps1, please refer to the user guide-Script Generator

## Step4: Add Script to NetApp script
-   Log in to NetApp Active IQ
-   On the left → Storage Management → Script, enter the script page
    ![](../../img/doc/gs_exam_na1.png)


-   New script
    ![](../../img/doc/gs_exam_na2.png)

## Step4: Configure NetApp alarm settings

-   On the left → Storage Management → Alarm Setting, enter the alarm setting page
    ![](../../img/doc/gs_exam_na3.png)


-   Added alert
    ![](../../img/doc/gs_exam_na4.png)

-   Establish alarm conditions (take Events as an example)
    ![](../../img/doc/gs_exam_na5.png)

-   Set alarm action
    ![](../../img/doc/gs_exam_na6.png)

## Step5: Receive warning message

-   When an alarm is triggered, the alarm information will be received through the communication software (take the message of entering the maintenance mode as an example).
    ![](../../img/doc/gs_exam_na8.png)