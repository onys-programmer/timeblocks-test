import DatePart from "./DatePart";
import range from "./utils/range";

function DatePartContainer() {
  const fixtureDates = range(1, 32);

  return (
    <DatePart dates={fixtureDates} />
  );
}

export default DatePartContainer;
