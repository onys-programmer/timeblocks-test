import DayRow from "./DayRow";
import DatePart from "./DatePart";
import { generateDateObjsOfMonth } from "./utils/generators";

function DatePartContainer() {
  const now = new Date();
  const dateObjsOfMonth = generateDateObjsOfMonth(now);

  return (
    <>
      <DayRow />
      <DatePart dateObjs={dateObjsOfMonth} />
    </>
  );
}

export default DatePartContainer;
