import './DateBox.scss';

function DateBox({ date, schedules, onClick,
  dateStatus: {
    isPicked,
    isThisMonth,
    isWeekend,
  }
}) {
  return (
    <div
      className={`DateBox ${isPicked ? 'picked' : ''}`}
      onClick={onClick}
    >
      <p className={`date ${!isThisMonth ? 'not-this-month' : ''} ${isWeekend}`}>
        {date}
      </p>
      {
        schedules.length !== 0 &&
        schedules.map(schedule =>
          <li
            key={schedule.id}
            className='schedule'
            style={{ backgroundColor: schedule.color }}
          >
            {schedule.title}
          </li>
        )
      }
    </div >
  );
}

export default DateBox;
