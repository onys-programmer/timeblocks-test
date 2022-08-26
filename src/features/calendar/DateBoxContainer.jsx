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
    schedule => {
      if (schedule['startDate'] <= dateObj && schedule['endDate'] >= dateObj) {
        return true
      };
      return false;
    }
  );

  const dateStatus = {
    isPicked: false,
    isThisMonth: true,
    isWeekend: 'weekday',
  };

  dateStatus.isPicked =
    pickedDate.toLocaleString() === dateObj.toLocaleString()
      ? true
      : false;

  dateStatus.isThisMonth =
    referenceDate.getMonth() === dateObj.getMonth()
      ? true
      : false;

  const day = dateObj.getDay();
  if (day === 0) {
    dateStatus.isWeekend = 'sunday';
  } else if (day === 6) {
    dateStatus.isWeekend = 'saturday';
  }

  return (
    <DateBox
      date={dateObj.getDate()}
      schedules={todaysSchedules}
      onClick={handleClickPickDate}
      dateStatus={dateStatus}
    />
  );
}

export default DateBoxContainer;
