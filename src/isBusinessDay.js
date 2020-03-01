function isBusinessDay(){
  let  today = new Date();
  let dayOfWeek = today.getDay();
  // allow only `monday`
  if(dayOfWeek !== 1) {
    return false;
  }

  const calendarId = "ja.japanese#holiday@group.v.calendar.google.com";
  const calendar = CalendarApp.getCalendarById(calendarId);

  let todayEvents = calendar.getEventsForDay(today);
  if(todayEvents.length > 0){
    for (let i=0; i<todayEvents.length; i++) {
      console.log("Event title is : " + todayEvents[i].getTitle() +"\n")
    }
    return false;
  }
  return true;
}
