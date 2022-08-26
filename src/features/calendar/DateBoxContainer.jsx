import { useContext } from 'react';
import { Context } from '../../App';
import DateBox from './DateBox';

function DateBoxContainer({ dateObj }) {
  const { state: {
    schedules,
    pickedDate,
    referenceDate,
  }, dispatch } = useContext(Context);

  const handleClickPickDate = () => {
    dispatch({ type: 'PICK_DATE', payload: dateObj });
    dispatch({ type: 'UPDATE_REFERENCE_DATE', payload: dateObj });
  }

  const todaysSchedules = schedules.filter(
    schedule => schedule['date'].toLocaleString() === dateObj.toLocaleString()
  );

  const isPicked =
    pickedDate.toLocaleString() === dateObj.toLocaleString()
      ? true
      : false;

  const isThisMonth =
    referenceDate.getMonth() === dateObj.getMonth()
      ? true
      : false;

  return (
    <DateBox
      date={dateObj.getDate()}
      schedules={todaysSchedules}
      onClick={handleClickPickDate}
      isPicked={isPicked}
      isThisMonth={isThisMonth}
    />
  );
}

export default DateBoxContainer;
