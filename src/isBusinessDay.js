function isBusinessDay(){
  let today = new Date(),
      dayOfWeek = today.getDay();

  // allow only `monday`
  if(dayOfWeek !== 1) {
    Logger.log("A bot stoped working because today is not Monday.")
    return false;
  }

  const calendarId = "ja.japanese#holiday@group.v.calendar.google.com";
  let calendar = CalendarApp.getCalendarById(calendarId),
      todayEvents = calendar.getEventsForDay(today);

  if(todayEvents.length > 0){
    Logger.log("Stoped working because today is public holiday:" + todayEvents)
    return false;
  }

  return true;
}
