import { render, screen } from '@testing-library/react';
import CalendarContainer from './CalendarContainer';
import { year, month } from './utils/now';

describe('Calendar는', () => {
  it('현재 연도를 렌더합니다.', () => {
    render(<CalendarContainer />);
    const yearElenent = screen.getByText(year);
    expect(yearElenent).toBeInTheDocument();
  });

  it('현재 Month를 렌더합니다.', () => {
    render(<CalendarContainer />);
    const monthElement = screen.getByText(month);
    expect(monthElement).toBeInTheDocument();
  });
});
