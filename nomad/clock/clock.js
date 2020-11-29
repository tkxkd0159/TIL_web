// function getTime() {
//   const date = new Date();
//   const minutes = date.getMinutes();
//   const hours = date.getHours();
//   const seconds = date.getSeconds();
//   clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
//     minutes < 10 ? `0${minutes}` : minutes
//   }:${seconds < 10 ? `0${seconds}` : seconds}`;
// }

const clockTitle = document.querySelector(".js-clock-time");

function getDday(
  year = 70,
  month = 1,
  day = 1,
  hour = 0,
  minutes = 0,
  seconds = 0
) {
  const currentDay = new Date();
  const targetDay = new Date(year, month - 1, day, hour, minutes, seconds);
  const myTimezoneDday = targetDay - currentDay;
  const GMTDday = myTimezoneDday - currentDay.getTimezoneOffset() * 60 * 1000;



  let res = myTimezoneDday / (1000 * 3600 * 24);
  const resDay = Math.floor(res);
  res = (res - resDay) * 24;
  const resHour = Math.floor(res);
  res = (res - resHour) * 60;
  const resMin = Math.floor(res);
  const resSec = Math.round((res - resMin) * 60);

  const dayStr = `${(resDay < 10 && resDay >= 0) ? `00${resDay}` : (resDay < 100 && resDay >= 10) ? `0${resDay}` : resDay}d`;
  const hourStr = `${resHour < 10 ? `0${resHour}` : resHour}h`;
  const minStr = `${resMin < 10 ? `0${resMin}` : resMin}m`;
  const secStr = `${resSec < 10 ? `0${resSec}` : resSec}s`;

  clockTitle.innerHTML = `${dayStr} ${hourStr} ${minStr} ${secStr}`
}

function main() {
  getDday(2020, 12, 24);
  setInterval(() => {
    getDday(2020, 12, 24);
  }, 1000);
}

main();
