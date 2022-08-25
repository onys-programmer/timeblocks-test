import './Calendar.scss';
import { month, year } from './now';

function Calendar() {
  return (
    <div className="Calendar">
      <header className="Calendar-header">
        <span className="month">{month}</span>
        <span className="year">{year}</span>
      </header>
    </div>
  );
}

export default Calendar;
