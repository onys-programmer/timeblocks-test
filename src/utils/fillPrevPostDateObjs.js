import { dateDayMonthYear } from './generators';

const fillPrevPostDateObjs = (dateObjs) => {
  const filledDateObjs = dateObjs.slice();

  fillPrevDateObjs();
  fillPostDateObjs();

  function fillPrevDateObjs() {
    const firstDateObj = dateObjs[0];
    const { date, day, month, year } = dateDayMonthYear(firstDateObj);

    for (let i = day; i > 0; i--) {
      const prevDate = new Date(year, month, date, 24 * i * -1);
      filledDateObjs.unshift(prevDate);
    }
  };

  function fillPostDateObjs() {
    const lastDateObj = dateObjs[dateObjs.length - 1];
    const { date, day, month, year } = dateDayMonthYear(lastDateObj);

    for (let i = 1; i < 7 - day; i++) {
      const postDate = new Date(year, month, date, 24 * i);
      filledDateObjs.push(postDate);
    }
  }

  return filledDateObjs;
}


export default fillPrevPostDateObjs;
