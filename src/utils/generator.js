const generateDatesOfMonth = (nowDate = new Date()) => {
  const month = nowDate.getMonth();

  const year = nowDate.getFullYear();

  const datesOfMonth = [];

  for (
    let i = 0;
    new Date(year, month, 1, 24 * i).getMonth() === month;
    i++
  ) {
    datesOfMonth.push(new Date(year, month, 1, 24 * i));
  }

  return datesOfMonth;
}

export default generateDatesOfMonth;
