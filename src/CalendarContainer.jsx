import CalendarHeaderContainer from './CalendarHeaderContainer';
import DatePartContainer from './DatePartContainer';

function CalendarContainer() {
  const referenceDate = new Date();

  return (
    <div className="CalendarContainer">
      <CalendarHeaderContainer referenceDate={referenceDate} />
      <DatePartContainer referenceDate={referenceDate} />
    </div>
  );
}

export default CalendarContainer;
