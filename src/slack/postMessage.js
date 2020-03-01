let text = "test slack";

function postMessage() {
  let token = 'TOKEN';
  let channelID = 'CHANNELID';
  let emoji = ':speaker:';
  const timeStamp = Math.round((new Date()).getTime() / 1000);
  try {
    let url = "https://slack.com/api/chat.postMessage";
    let payload = {
      "token" : token,
      "channel" : channelID,
      "text" : text+emoji,
      "username" : "お掃除通知 bot くん",
      "icon_emoji": ":robot_face:", 
      "attachments": JSON.stringify([
        {
          // pretext: "これはプリテキストだよ\nほげほげふがふが！！",
          color: "good",
          author_name: "yossiee",
          author_link: "https://github.com/yossiee",
          author_icon: "https://avatars0.githubusercontent.com/u/38056766?s=400&v=4",
          thumb_url: "https://4.bp.blogspot.com/-aurP2wC6nSI/WZP34_BvCJI/AAAAAAABGCc/UDEGhvMKOKc89dZkwlFGQctBLR2vma2gwCLcBGAs/s400/soujiki_man.png",
          title: "weekly-office-cleaning-notification-bot",
          title_link: "https://github.com/yossiee/weekly-office-cleaning-notification-bot",
          text: "A bot that sends a message to slack using Google Apps Script",
          footer: "Send from Google Apps Script",
          footer_icon: "https://www.gstatic.com/images/branding/product/2x/apps_script_64dp.png",
          ts: timeStamp,
        }
      ])
    };
    let params = {
      "method" : "POST",
      "Content-Type" : "application/json",
      "payload" : payload,
    };
    let res = UrlFetchApp.fetch(url, params);
    Logger.log(res);
    return true;
  } catch(error) {
    console.error(printError(error));
    return false;
  }
}
