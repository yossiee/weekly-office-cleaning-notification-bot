function getSheetData() {
  try {
    let sheet = SpreadsheetApp.getActiveSheet();
    return sheet.getRange(2, 1, sheet.getLastRow(), 4).getValues();
  } catch(error) {
    console.error(printError(error));
  }
}

function getLastRole(sheetData) {
  let lastRoleGroup = 0;
  for (let i=0; i<sheetData.length;i++) {
    if (sheetData[i][3]) {
      lastRoleGroup = parseInt(sheetData[i][0], 10);
      break;
    }
  }
  return lastRoleGroup;
}

function getTodayRole(lastRoleGroup, sheetData) {
  let todayRoleMembers = [];
  if (lastRoleGroup === 3) {
    lastRoleGroup = 0;
  }
  for (let i=0; i<sheetData.length;i++) {
    if (parseInt(sheetData[i][0], 10) === lastRoleGroup + 1) {
       todayRoleMembers.push(sheetData[i][1]);
    }
  }
  return todayRoleMembers;
}
