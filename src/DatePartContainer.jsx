import range from "./utils/range";

function DatePartContainer() {
  const fixtureDates = range(1, 32);

  return (
    <div className="DatePartContainer">
      {fixtureDates.map(fixtureDate => <li key={fixtureDate}>{fixtureDate}</li>)}
    </div>
  );
}

export default DatePartContainer;
