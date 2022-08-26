import './DateBox.scss';

function DateBox({ date, schedules, onClick }) {
  return (
    <div
      className="DateBox"
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
