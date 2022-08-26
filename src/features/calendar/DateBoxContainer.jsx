import { useContext } from 'react';
import { Context } from '../../App';
import DateBox from './DateBox';

function DateBoxContainer({ dateObj }) {
  const { state: { pickedDate, schedules }, dispatch } = useContext(Context);

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

  return (
    <DateBox
      date={dateObj.getDate()}
      schedules={todaysSchedules}
      onClick={handleClickPickDate}
      isPicked={isPicked}
    />
  );
}

export default DateBoxContainer;
