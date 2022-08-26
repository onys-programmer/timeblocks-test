import CalendarHeader from './CalendarHeader';

import { useContext } from 'react';
import { Context } from '../../App';

import { dateDayMonthYear } from '../../utils/generators';

function CalendarHeaderContainer({ referenceDate }) {
  const { dispatch } = useContext(Context);

  const { date, month, year } = dateDayMonthYear(referenceDate);

  const handleClickGoToPrevMonth = () => {
    const newReferenceDate = new Date(year, month - 1, date);
    dispatch({ type: "UPDATE_REFERENCE_DATE", payload: newReferenceDate });
  };

  const handleClickGoToPostMonth = () => {
    const newReferenceDate = new Date(year, month + 1, date);
    dispatch({ type: "UPDATE_REFERENCE_DATE", payload: newReferenceDate });
  };

  return (
    <CalendarHeader
      month={month}
      year={year}
      onClickPrev={handleClickGoToPrevMonth}
      onClickPost={handleClickGoToPostMonth}
    />
  );
}

export default CalendarHeaderContainer;
