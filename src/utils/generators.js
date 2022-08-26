import isLeapYear from "./isLeapYear";

const generateDateObjsOfMonth = (dateObj = new Date()) => {
  const month = dateObj.getMonth();

  const year = dateObj.getFullYear();

  const datesOfMonth = [];

  for (
    let i = 0;
    new Date(year, month, 1, 24 * i).getMonth() === month;
    i++
  ) {
    datesOfMonth.push(new Date(year, month, 1, 24 * i));
  }

  return datesOfMonth;
}

const generateDatesNumsOfYear = (year = new Date().getFullYear()) => {
  const februaryDatesNum = isLeapYear(year) ? 29 : 28;
  return [31, februaryDatesNum, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}

const dateDayMonthYear = dateObj => {
  const date = dateObj.getDate();
  const day = dateObj.getDay();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return { date, day, month, year };
}

export {
  generateDateObjsOfMonth,
  generateDatesNumsOfYear,
  dateDayMonthYear,
};
