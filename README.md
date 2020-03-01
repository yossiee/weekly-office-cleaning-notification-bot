# weekly-office-cleaning-notification-bot

## Overview
Every Monday we clean the office. There is a cleaning duty group, and the group turns around weekly.
This time, I created a bot to notify which group is in charge this week.

<img alt="demo" width="300" src="https://user-images.githubusercontent.com/38056766/75618359-506e5080-5bb0-11ea-8945-4710a729b51a.png">

## Dependencies
- Google Account
- Git

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
