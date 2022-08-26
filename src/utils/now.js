const dateObj = new Date();

const day = dateObj.getDate();

const month = dateObj.getMonth() + 1;

const year = dateObj.getFullYear();

export {
  dateObj,
  day,
  month,
  year,
};
