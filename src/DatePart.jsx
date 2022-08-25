import DateBoxContainer from "./DateBoxContainer";

import './DatePart.scss';

function DatePart({ dateObjs }) {
  return (
    <div className="DatePart">
      {dateObjs.map(dateObj =>
        <DateBoxContainer
          key={dateObj.getDate()}
          dateObj={dateObj}
        />
      )}
    </div>
  );
}

export default DatePart;
