import { render, screen } from '@testing-library/react';
import CalendarHeaderContainer from './CalendarHeaderContainer';
import { year, month } from './utils/now';

describe('CalendarHeaderContainer는', () => {
  it('현재 연도를 렌더합니다.', () => {
    render(<CalendarHeaderContainer />);
    const yearElement = screen.getByText(year);
    expect(yearElement).toBeInTheDocument();
  });

  it('현재 Month를 렌더합니다.', () => {
    render(<CalendarHeaderContainer />);
    const monthElement = screen.getByText(month);
    expect(monthElement).toBeInTheDocument();
  });
});
