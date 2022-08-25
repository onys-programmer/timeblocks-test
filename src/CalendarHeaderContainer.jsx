import CalendarHeader from './CalendarHeader';
import { month, year } from './utils/now';

function CalendarHeaderContainer() {
  return (
    <CalendarHeader month={month} year={year} />
  );
}

export default CalendarHeaderContainer;
