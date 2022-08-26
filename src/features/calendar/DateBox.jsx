import './DateBox.scss';

function DateBox({ date, schedules, onClick, isPicked, isThisMonth }) {
  return (
    <div
      className={`DateBox ${isPicked ? 'picked' : ''} ${!isThisMonth ? 'not-this-month' : ''}`}
      onClick={onClick}
    >
      {date}
      {
        schedules.length !== 0 &&
        schedules.map(schedule =>
          <li key={schedule.id}>
            {schedule.title}
          </li>
        )
      }
    </div >
  );
}

export default DateBox;
