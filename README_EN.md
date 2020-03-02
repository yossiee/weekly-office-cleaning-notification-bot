# weekly-office-cleaning-notification-bot

| [EN](https://github.com/yossiee/weekly-office-cleaning-notification-bot/README_EN.md) | [JA](https://github.com/yossiee/weekly-office-cleaning-notification-bot/README.md) |
| :---: | :---: |

## Overview
Every Monday we clean the office. There is a cleaning duty group, and the group turns around weekly.
This time, I created a bot to notify which group is in charge this week.

<img alt="demo" width="300" src="https://user-images.githubusercontent.com/38056766/75618359-506e5080-5bb0-11ea-8945-4710a729b51a.png">

## Dependencies
- Google Account
- Git
- Node/npm

## Architecture
- Google Services
    - Google Apps Script
    - Google Spredsheet
    - Google Calendar
- Slack APIs
    - [chat.postMessage](https://api.slack.com/methods/chat.postMessage)
- Local environment
    - [GitHub](https://github.com)
    - [clasp](https://github.com/google/clasp)

## Specification
1. Master data stored in Google Spreadsheet.
2. Read the data and get the slackID of the user assigned to today's cleaning duty.
3. Get calendar information from google calendar API and check if it is a holiday.
4. If today is Monday and not public holiday, send a message with mention to the user of the obtained slackID.
5. Finally, update the user data in the spreadsheet and finish the process.

## How to use `clasp` in local environment
clasp is command line platform for manage and develop the Google Apps Script.<br>
This is a [document](https://developers.google.com/apps-script/guides/clasp).

```sh
# Install
$ npm install @google/clasp -g 

# Login 
$ clasp login
# Open the browseer then choose the account you want authentication.
# Aftrer successful authentication, your login information will be saved in `~/.clasprc.json`

# Logout
$ clasp logout

# Create new project
$ clasp create <project name> --rootDir ./src
Create new script https://script.google.com/d/xxxxxxxxxxxxxxxxxxxx
Cloned 1 file.
└─ appsscript.json

# Open editor in the browser
$ clasp open
```
