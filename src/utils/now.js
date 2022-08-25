const nowDate = new Date();

const day = nowDate.getDate();

const month = nowDate.getMonth() + 1;

const year = nowDate.getFullYear();

export {
  nowDate,
  day,
  month,
  year,
};
