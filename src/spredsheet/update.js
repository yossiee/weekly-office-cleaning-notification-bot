function updateSheetData(todayGroup, sheetData) {
  let nextGroup = todayGroup + 1;
  let sheet = SpreadsheetApp.getActiveSheet();
  if (todayGroup === 4) {
    nextGroup = 1;
  }
  for (let j=0;j<sheetData.length;j++) {
    if (sheetData[j][3]) {
      sheet.getRange(j+2,4).setValue('FALSE');
      continue;
    } else if (sheetData[j][0] === nextGroup) {
      sheet.getRange(j+2, 4).setValue('TRUE');
      continue;
    }
  }
}
