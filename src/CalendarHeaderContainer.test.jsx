import { render, screen } from '@testing-library/react';
import CalendarHeaderContainer from './CalendarHeaderContainer';
import referenceDate from './__fixtures__/referenceDate';

describe('CalendarHeaderContainer는', () => {
  const { year, month } = referenceDate;

  it('기준 일의 연도를 렌더합니다.', () => {
    render(<CalendarHeaderContainer
      referenceDate={referenceDate}
    />);

    const yearElement = screen.getByText(year);
    expect(yearElement).toBeInTheDocument();
  });

  it('기준 일의 Month를 렌더합니다.', () => {
    render(<CalendarHeaderContainer
      referenceDate={referenceDate}
    />);

    const monthElement = screen.getByText(month);
    expect(monthElement).toBeInTheDocument();
  });
});
