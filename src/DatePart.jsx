import DateBoxContainer from "./DateBoxContainer";

import { dateDayMonthYear } from "./utils/generators";

import './DatePart.scss';

function DatePart({ dateObjs }) {
  // 첫날의 요일 구하기. 수요일이면 3. -3까지 date 객체 unshift
  // 끝날의 요일 구하기. 화요일이면 2. +4까지 date 객체 push

  const fullDateObjs = dateObjs.slice();

  const firstDateObj = dateObjs[0];
  const lastDateObj = dateObjs[dateObjs.length - 1];

  fillPrevDateObjs();
  fillPostDateObjs();

  function fillPrevDateObjs() {
    const [firstDate, firstDay, firstMonth, firstYear] = dateDayMonthYear(firstDateObj);

    for (let i = firstDay; i > 0; i--) {
      const prevDate = new Date(firstYear, firstMonth, firstDate, 24 * i * -1);
      fullDateObjs.unshift(prevDate);
    }
  };

  function fillPostDateObjs() {
    const [lastDate, lastDay, lastMonth, lastYear] = dateDayMonthYear(lastDateObj);

    for (let i = 1; i < 7 - lastDay; i++) {
      const postDate = new Date(lastYear, lastMonth, lastDate, 24 * i);
      fullDateObjs.push(postDate);
    }
  }

  return (
    <div className="DatePart">
      {fullDateObjs.map(dateObj =>
        <DateBoxContainer
          key={dateObj.getTime()}
          dateObj={dateObj}
        />
      )}
    </div>
  );
}

export default DatePart;
