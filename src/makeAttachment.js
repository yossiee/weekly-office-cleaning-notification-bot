function makeAttachment(data) {
  let mentions = '';
  let text = '\nおはようございます！\n今週の掃除当番の方はお願いします '
  for (let i=0; i<data.length;i++) {
    mentions += "<@" + data[i] + "> ";
  }
  return mentions + text;
}
