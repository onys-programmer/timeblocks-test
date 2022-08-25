import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';
import { year, month } from './now';

describe('Calendar는', () => {
  it('현재 연도를 렌더합니다.', () => {
    render(<Calendar />);
    const yearElenent = screen.getByText(year);
    expect(yearElenent).toBeInTheDocument();
  });

  it('현재 Month를 렌더합니다.', () => {
    render(<Calendar />);
    const monthElement = screen.getByText(month);
    expect(monthElement).toBeInTheDocument();
  });
});
