import { render, screen } from '@testing-library/react';
import DatePartContainer from './DatePartContainer';
import { generateDateObjsOfMonth } from './utils/generators';

describe('DatePartContainer', () => {
  it('는 해당 월의 날짜들(1~끝일)을 렌더합니다.', () => {
    render(<DatePartContainer />);

    const now = new Date();
    const datesObjsOfMonth = generateDateObjsOfMonth(now);

    const dateElement1 = screen.getAllByText(1);
    const dateElement2 = screen.getAllByText(2);
    const dateElement3 = screen.getAllByText(3);

    const lastDate = datesObjsOfMonth.pop().getDate();
    const lastDateElement = screen.getByText(lastDate);

    expect(dateElement1).not.toBeNull();
    expect(dateElement2).not.toBeNull();
    expect(dateElement3).not.toBeNull();
    expect(lastDateElement).not.toBeNull();
  });
});
