import {
  generateDateNumsOfYear,
} from './generators';

import isLeapYear from './isLeapYear';

describe('generator', () => {
  describe('generateDateNumsOfYear', () => {
    it('는 현재 연도의 월별 날짜 수 배열을 리턴합니다.', () => {
      const dateNumsOfMonth = generateDateNumsOfYear();
      expect(dateNumsOfMonth.length).toBe(12);
    });

    describe('는 윤년일 때', () => {
      const year = 2020;
      expect(isLeapYear(year)).toBe(true);

      it('2월의 일수가 29일입니다.', () => {
        const dateNumsOfMonth = generateDateNumsOfYear(year);
        expect(dateNumsOfMonth[1]).toBe(29);
      })

      it('1년이 366일입니다.', () => {
        const dateNumsOfMonth = generateDateNumsOfYear(year);
        expect(dateNumsOfMonth.reduce((acc, cur) => acc + cur, 0)).toBe(366);
      });
    });

    describe('는 윤년이 아닐 때', () => {
      const year = 2021;
      expect(isLeapYear(year)).toBe(false);

      it('2월의 일수가 28일입니다.', () => {
        const dateNumsOfMonth = generateDateNumsOfYear(year);
        expect(dateNumsOfMonth[1]).toBe(28);
      })

      it('1년이 365일입니다.', () => {
        const dateNumsOfMonth = generateDateNumsOfYear(year);
        expect(dateNumsOfMonth.reduce((acc, cur) => acc + cur, 0)).toBe(365);
      });
    });
  });
});
