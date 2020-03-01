function main() {
  let sheetData = getSheetData();
  let groupNum = getLastRole(sheetData);
  let members = getTodayRole(groupNum, sheetData);
  let text = makeAttachment(members)
  if (isBusinessDay()) {
    if (postMessage(text)) { 
      updateSheetData(groupNum, sheetData);
    }
  }
}

function printError(error){
  return "[名前] " + error.name + "\n" + 
    "[場所] " + error.fileName + "(" + error.lineNumber + "行目)\n" + 
    "[メッセージ]" + error.message + "\n" + 
    "[StackTrace]\n" + error.stack;
}
