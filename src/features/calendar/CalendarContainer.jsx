import { useContext } from 'react';
import { Context } from '../../App';

import CalendarHeaderContainer from './CalendarHeaderContainer';
import DatePartContainer from './DatePartContainer';

function CalendarContainer() {
  const { state: { referenceDate } } = useContext(Context);

  return (
    <div className="CalendarContainer">
      <CalendarHeaderContainer referenceDate={referenceDate} />
      <DatePartContainer referenceDate={referenceDate} />
    </div>
  );
}

export default CalendarContainer;
