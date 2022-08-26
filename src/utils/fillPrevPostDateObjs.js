import { dateDayMonthYear } from './generators';

const fillPrevPostDateObjs = (dateObjs) => {
  function fillPrevDateObjs() {
    const prevDateObjs = [];
    const firstDateObj = dateObjs[0];
    const { date, day, month, year } = dateDayMonthYear(firstDateObj);

    for (let i = day; i > 0; i--) {
      const prevDate = new Date(year, month, date, 24 * i * -1);
      prevDateObjs.push(prevDate);
    }

    return prevDateObjs;
  };

  function fillPostDateObjs() {
    const postDateObjs = [];
    const lastDateObj = dateObjs[dateObjs.length - 1];
    const { date, day, month, year } = dateDayMonthYear(lastDateObj);

    for (let i = 1; i < 7 - day; i++) {
      const postDate = new Date(year, month, date, 24 * i);
      postDateObjs.push(postDate);
    }

    return postDateObjs;
  }

  const prevDateObjs = fillPrevDateObjs();
  const postDateObjs = fillPostDateObjs();
  const filledDateObjs = prevDateObjs.concat(dateObjs, postDateObjs);

  return filledDateObjs;
}

export default fillPrevPostDateObjs;
