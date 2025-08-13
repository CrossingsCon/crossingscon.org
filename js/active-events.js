const eventsTimes = document.querySelectorAll("table.events td.time");

const now = new Date();

eventsTimes.forEach(eventTime => {
  const { date } = eventTime.dataset;
  
  const time = new Date(date);
  if(time < now) {
    eventTime.parentElement.classList.add("passe");
  }
});
