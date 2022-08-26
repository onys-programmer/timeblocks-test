import "./DayRow.scss";

function DayRow() {
  const daySequence = ['일', '월', '화', '수', '목', '금', '토'];
  return (
    <div className="DayRow">
      {daySequence.map(day => <div key={day} className="day-item">{day}</div>)}
    </div>
  );
}

export default DayRow;
