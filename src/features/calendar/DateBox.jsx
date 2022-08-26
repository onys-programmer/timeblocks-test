import './DateBox.scss';

function DateBox({ dateObj }) {
  const date = dateObj.getDate();
  return (
    <div className="DateBox">
      {date}
    </div>
  );
}

export default DateBox;
