import CalendarHeader from './CalendarHeader';
import { dateDayMonthYear } from './utils/generators';

function CalendarHeaderContainer({ referenceDate }) {
  console.log(referenceDate);
  const { month, year } = dateDayMonthYear(referenceDate);

  return (
    <CalendarHeader month={month} year={year} />
  );
}

export default CalendarHeaderContainer;
