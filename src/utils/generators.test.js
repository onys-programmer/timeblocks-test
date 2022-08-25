import {
  generateDatesNumsOfYear,
  generateDateObjsOfMonth,
} from './generators';

import isLeapYear from './isLeapYear';

import range from './range';

describe('generator,', () => {
  describe('generateDatesNumsOfYear', () => {
    it('는 현재 연도의 월별 날짜 수 배열을 리턴합니다.', () => {
      const datesNumsOfMonth = generateDatesNumsOfYear();
      expect(datesNumsOfMonth.length).toBe(12);
    });

    describe('윤년일 때', () => {
      const year = 2020;
      expect(isLeapYear(year)).toBe(true);

      it('2월의 일수가 29일입니다.', () => {
        const datesNumsOfMonth = generateDatesNumsOfYear(year);
        expect(datesNumsOfMonth[1]).toBe(29);
      })

      it('1년이 366일입니다.', () => {
        const datesNumsOfMonth = generateDatesNumsOfYear(year);
        expect(datesNumsOfMonth.reduce((acc, cur) => acc + cur, 0)).toBe(366);
      });
    });

    describe('윤년이 아닐 때', () => {
      const year = 2021;
      expect(isLeapYear(year)).toBe(false);

      it('2월의 일수가 28일입니다.', () => {
        const datesNumsOfMonth = generateDatesNumsOfYear(year);
        expect(datesNumsOfMonth[1]).toBe(28);
      })

      it('1년이 365일입니다.', () => {
        const datesNumsOfMonth = generateDatesNumsOfYear(year);
        expect(datesNumsOfMonth.reduce((acc, cur) => acc + cur, 0)).toBe(365);
      });
    });
  });

  describe('generateDateObjsOfMonth', () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const datesNumOfThisMonth = generateDatesNumsOfYear(year)[month];

    it('는 해당 날짜가 속한 달의 날짜 객체 배열을 리턴합니다.', () => {
      const dateObjsOfMonth = generateDateObjsOfMonth(now);

      expect(dateObjsOfMonth.length).toBe(datesNumOfThisMonth);
      expect(dateObjsOfMonth.filter(dateObj => dateObj.getMonth() !== month).length).toBe(0);
    });

    it('가 리턴하는 날짜 객체 배열의 day는 1일부터 끝일까지의 sequence입니다.', () => {
      const dateObjsOfMonth = generateDateObjsOfMonth(now);

      expect(JSON.stringify(dateObjsOfMonth.map(dateObj => dateObj.getDate())))
        .toBe(JSON.stringify(range(1, datesNumOfThisMonth + 1)));
    })
  });
});
