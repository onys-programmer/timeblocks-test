function DatePart({ dateObjs }) {
  return (
    <div className="DatePart">
      {dateObjs.map(dateObj =>
        <li key={dateObj.getDate()}>
          {dateObj.getDate()}
        </li>
      )}
    </div>
  );
}

export default DatePart;
