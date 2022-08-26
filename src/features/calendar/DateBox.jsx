import './DateBox.scss';

function DateBox({ dateObj, onClick }) {
  const date = dateObj.getDate();

  return (
    <div
      className="DateBox"
      onClick={onClick}
    >
      {date}
    </div>
  );
}

export default DateBox;
