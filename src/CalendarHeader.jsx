import './Calendar.scss';

function CalendarHeader({ month, year }) {
  return (
    <div className="CalendarHeader">
      <header className="calendar-header">
        <nav className='month-and-year'>
          <span className="month">{month}</span>
          <span className="year">{year}</span>
        </nav>
      </header>
    </div>
  );
}

export default CalendarHeader;
