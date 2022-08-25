import CalendarHeader from './CalendarHeader';
import { month, year } from './utils/now';

function CalendarContainer() {
  return (
    <div className="CalendarContainer">
      <CalendarHeader month={month} year={year} />
    </div>
  );
}

export default CalendarContainer;
