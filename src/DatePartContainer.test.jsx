import { render, screen } from '@testing-library/react';
import DatePartContainer from './DatePartContainer';

describe('DatePartContainer', () => {
  it('는 날짜들을 렌더합니다.', () => {
    render(<DatePartContainer />);

    const dateElement1 = screen.getAllByText(1);
    const dateElement2 = screen.getAllByText(2);
    const dateElement3 = screen.getAllByText(3);

    expect(dateElement1).not.toBeNull();
    expect(dateElement2).not.toBeNull();
    expect(dateElement3).not.toBeNull();
  });
});
