function isBusinessDay(){
  let  today = new Date();
  let dayOfWeek = today.getDay();
  // allow only `monday`
  if(dayOfWeek !== 1) {
    console.log("A bot stoped working because today is not Monday.")
    return false;
  }

  const calendarId = "ja.japanese#holiday@group.v.calendar.google.com";
  const calendar = CalendarApp.getCalendarById(calendarId);

  let todayEvents = calendar.getEventsForDay(today);
  if(todayEvents.length > 0){
    console.log("A bot stoped working because today is public holiday.")
    console.log(todayEvents)
    return false;
  }
  return true;
}
