import './Calendar.scss';
import { month, year } from './now';

function Calendar() {
  return (
    <div className="Calendar">
      <header className="Calendar-header">
        <nav className='month-and-year'>
          <span className="month">{month}</span>
          <span className="year">{year}</span>
        </nav>
      </header>
    </div>
  );
}

export default Calendar;
