import { render, screen } from '@testing-library/react';
import DatePartContainer from './DatePartContainer';

describe('DatePartContainer', () => {
  it('는 해당 월의 날짜들(1~끝일)을 렌더합니다.', () => {
    render(<DatePartContainer
      referenceDate={new Date(2022, 5, 26)}
    />);

    const dateElements = screen.getAllByText(/\d/i);

    expect(dateElements.length).toBe(35);
    expect(dateElements[0]).toHaveTextContent(31);
    expect(dateElements[dateElements.length - 1]).toHaveTextContent(2);
  });
});
