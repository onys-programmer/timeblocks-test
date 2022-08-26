import { dateObj, day, month, year } from './utils/now';

import CalendarHeaderContainer from './CalendarHeaderContainer';
import DatePartContainer from './DatePartContainer';

function CalendarContainer() {
  const referenceDate = {
    dateObj,
    day,
    month,
    year,
  };

  return (
    <div className="CalendarContainer">
      <CalendarHeaderContainer referenceDate={referenceDate} />
      <DatePartContainer referenceDate={referenceDate} />
    </div>
  );
}

export default CalendarContainer;
