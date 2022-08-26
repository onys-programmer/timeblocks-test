import './DateBox.scss';

function DateBox({ date, schedules, onClick, isPicked }) {
  return (
    <div
      className={`DateBox ${!isPicked ? '' : 'picked'}`}
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
