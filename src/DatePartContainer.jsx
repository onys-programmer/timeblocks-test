import DayRow from "./DayRow";
import DatePart from "./DatePart";
import { generateDateObjsOfMonth } from "./utils/generators";

function DatePartContainer({ referenceDate: { dateObj } }) {
  const dateObjsOfMonth = generateDateObjsOfMonth(dateObj);

  return (
    <>
      <DayRow />
      <DatePart dateObjs={dateObjsOfMonth} />
    </>
  );
}

export default DatePartContainer;
