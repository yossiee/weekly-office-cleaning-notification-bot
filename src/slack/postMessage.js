const token = 'xoxp-111122223333444455556666777788889999aaaabbbccccddddeeeeffffgggg',
      channelId = 'CEBE917K5',
      timeStamp = Math.round((new Date()).getTime() / 1000),
      endpoint = "https://slack.com/api/chat.postMessage",
      githubUrl = "https://github.com/",
      author = "yossiee",
      repo = "weekly-office-cleaning-notification-bot";

let params = {},
    response = {};

function postMessage(text, threadTimestamp) {
  // threadTimestamp = "1592646902.008100";
  try {
    let payload = {
      "token" : token,
      "channel" : channelId,
      "text" : threadTimestamp === "" ? text : "<@UT3MR9FQT> これはサンプルです。",
      "username" : "お掃除通知",
      "icon_emoji": ":apps-script:",
      "link_names": true,
      "thread_ts": threadTimestamp,
      "attachments": JSON.stringify([{
        pretext: "今週ゴミ捨て担当ですのでよろしくお願いします。\nゴミ袋、ダンボールを地下まで運んでください。",
        color: "#800080",
        author_name: author,
        author_link: githubUrl + "/" + author,
        author_icon: "https://avatars0.githubusercontent.com/u/38056766?s=400&v=4",
        thumb_url: "https://1.bp.blogspot.com/-zmdq8WOMGVs/U32NrDMx0pI/AAAAAAAAg0E/itZPw9olczo/s800/school_chiritori_houki.png",
        title: repo,
        title_link: githubUrl + "/" + author + "/" + repo + "/tree/office/tokyo",
        text: "A bot that sends regurally the messages to slack channel",
        footer: "Send from Google Apps Script",
        footer_icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        ts: timeStamp,
      }])
    };

    params = {
      "method" : "POST",
      "Content-Type" : "application/json",
      "payload" : payload,
    };

    response = UrlFetchApp.fetch(endpoint, params);
    Logger.log(response);
    return true;
  } catch(error) {
    console.error(printError(error));
    return false;
  }
}
