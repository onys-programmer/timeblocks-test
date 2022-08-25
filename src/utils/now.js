import { generateDatesOfMonth } from "./generators";

const nowDate = new Date();

const day = nowDate.getDate();

const month = nowDate.getMonth() + 1;

const year = nowDate.getFullYear();

const datesOfMonth = generateDatesOfMonth();

export {
  nowDate,
  day,
  month,
  year,
  datesOfMonth,
};
