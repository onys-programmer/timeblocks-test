import { useContext } from 'react';
import { Context } from '../../App';

import CalendarHeaderContainer from './CalendarHeaderContainer';
import DatePartContainer from './DatePartContainer';

import './Calendar.scss';

function CalendarContainer() {
  const { state: { referenceDate, showModal } } = useContext(Context);

  return (
    <div className={`Calendar ${showModal ? 'modal-is-opened' : ''}`}>
      <CalendarHeaderContainer referenceDate={referenceDate} />
      <DatePartContainer referenceDate={referenceDate} />
    </div>
  );
}

export default CalendarContainer;
