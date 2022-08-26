import { useContext } from 'react';
import { Context } from '../../App';
import DateBox from './DateBox';

function DateBoxContainer({ dateObj }) {
  const { dispatch } = useContext(Context);

  const handleClickPickDate = () => {
    dispatch({ type: 'PICK_DATE', payload: dateObj });
  }
  return (
    <DateBox dateObj={dateObj} onClick={handleClickPickDate} />
  );
}

export default DateBoxContainer;
