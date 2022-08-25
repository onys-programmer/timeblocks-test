function DateBox({ dateObj }) {
  const day = dateObj.getDate();
  return (
    <div className="DateBox">
      {day}
    </div>
  );
}

export default DateBox;
