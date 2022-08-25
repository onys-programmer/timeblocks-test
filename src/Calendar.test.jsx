import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';

describe('Calendar는', () => {
  it('현재 연도를 렌더합니다.', () => {
    render(<Calendar />);
    const linkElement = screen.getByText(/2022/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('현재 Month를 렌더합니다.', () => {
    render(<Calendar />);
    const linkElement = screen.getByText(/8/i);
    expect(linkElement).toBeInTheDocument();
  });
});
