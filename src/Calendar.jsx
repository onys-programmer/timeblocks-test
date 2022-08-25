import './Calendar.css';
import { month, year } from './now';

function Calendar() {
  return (
    <div className="Calendar">
      <header className="Calendar-header">
        <span>{month}</span><span>{year}</span>
      </header>
    </div>
  );
}

export default Calendar;
