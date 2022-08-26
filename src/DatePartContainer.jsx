import DayRow from "./DayRow";
import DatePart from "./DatePart";
import {
  generateDateObjsOfMonth,
  dateDayMonthYear
} from "./utils/generators";

function DatePartContainer({ referenceDate }) {
  const dateObjs = generateDateObjsOfMonth(referenceDate);
  console.log(dateObjs);
  // 첫날의 요일 구하기. 수요일이면 3. -3까지 date 객체 unshift
  // 끝날의 요일 구하기. 화요일이면 2. +4까지 date 객체 push

  const fullDateObjs = dateObjs.slice();

  const firstDateObj = dateObjs[0];
  const lastDateObj = dateObjs[dateObjs.length - 1];

  fillPrevDateObjs();
  fillPostDateObjs();

  function fillPrevDateObjs() {
    const { date, day, month, year } = dateDayMonthYear(firstDateObj);

    for (let i = day; i > 0; i--) {
      const prevDate = new Date(year, month, date, 24 * i * -1);
      fullDateObjs.unshift(prevDate);
    }
  };

  function fillPostDateObjs() {
    const { date, day, month, year } = dateDayMonthYear(lastDateObj);

    for (let i = 1; i < 7 - day; i++) {
      const postDate = new Date(year, month, date, 24 * i);
      fullDateObjs.push(postDate);
    }
  }

  return (
    <>
      <DayRow />
      <DatePart dateObjs={fullDateObjs} />
    </>
  );
}

export default DatePartContainer;
