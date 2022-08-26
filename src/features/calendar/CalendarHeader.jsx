import './Calendar.scss';

function CalendarHeader({ month, year, onClickPrev, onClickPost }) {
  return (
    <div className="CalendarHeader">
      <header className="calendar-header">
        <button
          className="btn prev-btn"
          onClick={onClickPrev}
        >
          ◄
        </button>
        <nav className='month-and-year'>
          <span className="month">{month + 1}</span>
          <span className="year">{year}</span>
        </nav>
        <button
          className="btn post-btn"
          onClick={onClickPost}
        >
          ►
        </button>
      </header>
    </div>
  );
}

export default CalendarHeader;
