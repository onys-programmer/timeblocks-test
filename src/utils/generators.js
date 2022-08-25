import isLeapYear from "./isLeapYear";

const generateDatesOfMonth = (nowDate = new Date()) => {
  const month = nowDate.getMonth();

  const year = nowDate.getFullYear();

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

const generateDateNumsOfYear = (year = new Date().getFullYear()) => {
  const februaryDatesNum = isLeapYear(year) ? 29 : 28;
  return [31, februaryDatesNum, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}

export {
  generateDatesOfMonth,
  generateDateNumsOfYear,
};
