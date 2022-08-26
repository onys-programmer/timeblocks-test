import { useContext } from 'react';
import { Context } from '../../App';
import DateBox from './DateBox';

function DateBoxContainer({ dateObj }) {
  const { state: { schedules }, dispatch } = useContext(Context);

  const handleClickPickDate = () => {
    dispatch({ type: 'PICK_DATE', payload: dateObj });
  }
  const todaysSchedules = schedules.filter(
    schedule => schedule['date'].toLocaleString() === dateObj.toLocaleString()
  );

  return (
    <DateBox
      date={dateObj.getDate()}
      schedules={todaysSchedules}
      onClick={handleClickPickDate} />
  );
}

export default DateBoxContainer;
