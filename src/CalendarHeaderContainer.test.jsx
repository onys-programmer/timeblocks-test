import { render, screen } from '@testing-library/react';
import CalendarHeaderContainer from './CalendarHeaderContainer';

describe('CalendarHeaderContainer는', () => {
  const referenceDate = new Date(2022, 5, 26) // 2022년 6월 26일

  it('기준 일의 연도를 렌더합니다.', () => {
    render(<CalendarHeaderContainer
      referenceDate={referenceDate}
    />);

    const yearElement = screen.getByText(2022);
    expect(yearElement).toBeInTheDocument();
  });

  it('기준 일의 Month를 렌더합니다.', () => {
    render(<CalendarHeaderContainer
      referenceDate={referenceDate}
    />);

    const monthElement = screen.getByText(6);
    expect(monthElement).toBeInTheDocument();
  });
});
