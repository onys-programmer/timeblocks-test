import DatePart from "./DatePart";
import { generateDateObjsOfMonth } from "./utils/generators";

function DatePartContainer() {
  const now = new Date();
  const dateObjsOfMonth = generateDateObjsOfMonth(now);

  return (
    <DatePart dateObjs={dateObjsOfMonth} />
  );
}

export default DatePartContainer;
