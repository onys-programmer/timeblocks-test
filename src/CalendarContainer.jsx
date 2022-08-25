import CalendarHeader from './CalendarHeader';
import DatePartContainer from './DatePartContainer';
import { month, year } from './utils/now';

function CalendarContainer() {
  return (
    <div className="CalendarContainer">
      <CalendarHeader month={month} year={year} />
      <DatePartContainer />
    </div>
  );
}

export default CalendarContainer;
