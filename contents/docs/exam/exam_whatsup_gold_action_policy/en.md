---
lang: en
id: whatsup_gold_action_policy
title: Whatsup Gold Action and Policy Integration
author: Justin
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/exam/exam_whatsup_gold_action_policy
---

## Step0: Environmental preparation

-   Hosts with WhatsUp Gold installed
-   The connection between the host of WhatsUp Gold and the host of Signal is smooth (the default connection port is 8000)
-   Signaal's host has a smooth external network connection

## Step1: Set up Signaal user.

-   Add a user, obtain and set a user ID, please refer to the "Send the First Test Message" document as required.

## Step2: Set up the Signal group

-   Add the corresponding user to the group.
    ![](../../img/doc/example1.png)
     ![](../../img/doc/example1.1.png)
      ![](../../img/doc/example1.2.png)

## Step3: Generate alarm script

-   Use the Script generator to generate Script, copy the Script and use it in the next step, please refer to the User Guide-cript Generator.

## Step4: Add WhatsUp Gold action database
-   Enter the action and policy setting page.
    ![](../../img/doc/gs_exam_wug1.png)

-   Click Add → Dynamic Script Action in the action database below.
    ![](../../img/doc/gs_exam_wug2.png)

-   Select script type (T): VBScript, and copy the script generated in the previous step to the script text (S) below.
    ![](../../img/doc/gs_exam_wug3.png)

## Step5: Set WhatsUp Gold action policy
-   Enter the action and policy setting page.
    ![](../../img/doc/gs_exam_wug1.png)

-   Add an action policy above.
    ![](../../img/doc/gs_exam_wug4.png)

-   Click to join, and select Signal Alert in the action database.
    ![](../../img/doc/gs_exam_wug5.png)

-   Check the settings and click OK.
    ![](../../img/doc/gs_exam_wug6.png)

## Step6: Configure WhatsUp Gold active monitoring tool

-   Add an active monitoring tool under the alarm device (take echo as an example).
    ![](../../img/doc/example6.png)


-   Use the default network interface settings.
    ![](../../img/doc/example7.png)

-   Select the policy Signal Policy.
    ![](../../img/doc/gs_exam_wug7.png)

-   Confirm the settings and press Finish.
    ![](../../img/doc/gs_exam_wug8.png)

## Step7: Receive warning message

-   When an alarm is triggered, the alarm information will be received through the communication software.
    ![](../../img/doc/example10.png)