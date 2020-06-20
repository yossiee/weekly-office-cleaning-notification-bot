function makeAttachment(data) {
  let mentions = '',
      text = '\n*ゴミ当番の週です！*';

  for (let i=0; i<data.length;i++) {
    mentions += "<@" + data[i] + "> ";
  }
  return mentions + text;
}
