import DayRow from "./DayRow";
import DatePart from "./DatePart";
import {
  generateDateObjsOfMonth,
} from "../../utils/generators";
import fillPrevPostDateObjs from "../../utils/fillPrevPostDateObjs";

function DatePartContainer({ referenceDate }) {
  const dateObjsOfMonth = generateDateObjsOfMonth(referenceDate);
  const DateObjsAtOnePage = fillPrevPostDateObjs(dateObjsOfMonth);

  return (
    <>
      <DayRow />
      <DatePart dateObjs={DateObjsAtOnePage} />
    </>
  );
}

export default DatePartContainer;
