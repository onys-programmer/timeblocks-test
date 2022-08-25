function DatePart({ dates }) {
  return (
    <div className="DatePart">
      {dates.map(fixtureDate => <li key={fixtureDate}>{fixtureDate}</li>)}
    </div>
  );
}

export default DatePart;
