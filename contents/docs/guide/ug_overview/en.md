---
lang: en
id: overview
title: Feature Overview
author: Justin
type : post
sidebar: Docs
showTitle: true
hideAnchor: false
slug: /docs/guide/ug_overview
---

![](../../img/doc/1.png)

## Login interface

-   When the serial number is activated after installation, click ICON to start using\
    ![](../../img/doc/2.png)
The default login account password is admin

-   After opening the menu, please click User-\>Settings at the top right after logging in, and change the password first\
    ![](../../img/doc/3.png)

-   This page provides user display name, password, and default language replacement
    ![](../../img/doc/4.png)
After the replacement, please remember to click the replacement button to save the settings.

## Function menu

-   On the left side of the screen is a menu of all functions, click on the expanded menu to list all functions
    ![](../../img/doc/5.png)

## Dashboard

-   After opening the menu, click on the dashboard option on the left to view the dashboard. The dashboard can view all alarm conditions, ACK conditions, response rates and other information.					![](../../img/doc/dashboard1.png)
	![](../../img/doc/dashboard2.png)
	![](../../img/doc/dashboard3.png)
	![](../../img/doc/dashboard4.png)
	![](../../img/doc/dashboard5.png)

   

## Authorization

-   After opening the menu, click the About option on the left to view the current license status, and you can view the user agreement in other fields. For how to activate the serial number and license update, please refer to [Installation Instructions](install)
    ![](../../img/doc/license.png)

## authority management

-   Click Permission Management to add/modify the signal manager account
    ![](../../img/doc/authority.png)

-   Click Add to add a manager
    ![](../../img/doc/authority2.png)

There are four types of managers, and the corresponding permissions are:

**ADMIN**: Have all permissions

**API_SENDER**: API sender, no web permission

**WEB_ADMIN**: Has the highest authority, but no system authority includes:

-   Restart the service
-   Change log level
-   Replacement voucher

**READER**: Only read the dashboard

## User

-   After opening the menu, click the user on the left to edit the user
    ![](../../img/doc/user_sitebar.png)

-   Click the Add button to add users
    ![](../../img/doc/user_detail.png)
-   The following provides user import and export functions
    ![](../img/doc/user_sitebar.png)

-   Import/export user content in .CSV file format
![](../../img/doc/import_user.png)

## Group

-   After opening the menu, click on the group to change the group settings
    ![](../../img/doc/group_sitebar.png)

-   Add group
    ![](../../img/doc/15.png)

-   Please enter the name you want to set in the group name above.

-   There are buttons in the middle to add one, add multiple, remove one, and remove multiple.

-   Please click Save after editing to keep the settings.
-   Below provides group import and export functions
    ![](../../img/doc/group_sitebar.png)

-   Import/export group content in .CSV file format
![](../../img/doc/import_group.png)

## Service Integration

-   After opening the menu, click Service Integration to set all alarm options and view instructions on how to integrate services.
    ![](../../img/doc/exam_3_integration.png)


## System

-   After opening the menu, click the system to adjust the Logging Level (Logging Level)
    ![](../../img/doc/system1.png)

-   If there is a system error, it is recommended to change the log level to Debug during Trouble Shooting. Please click Save when the change is completed.

-   You can check whether to enable SSL/TLS.

-   Import SSL Certificate here
    ![](../../img/doc/system2.png)

Please click Submit when the import is complete, and restart the service after the submission is completed.

-   Service restart
    ![](../../img/doc/20.png)
If the system is changed, the service restart can be performed on this system page.