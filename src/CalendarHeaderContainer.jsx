import CalendarHeader from './CalendarHeader';

function CalendarHeaderContainer({ referenceDate: { month, year } }) {
  return (
    <CalendarHeader month={month} year={year} />
  );
}

export default CalendarHeaderContainer;
