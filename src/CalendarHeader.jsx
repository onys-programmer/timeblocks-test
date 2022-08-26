import './Calendar.scss';

function CalendarHeader({ month, year }) {
  return (
    <div className="CalendarHeader">
      <header className="calendar-header">
        <nav className='month-and-year'>
          <span className="month">{month + 1}</span>
          <span className="year">{year}</span>
        </nav>
      </header>
    </div>
  );
}

export default CalendarHeader;
