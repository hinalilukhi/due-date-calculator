const axios = require('axios');
const { CALENDARIFIC_API_KEY, COUNTRY, YEAR } = require('../src/constants');
const { getHolidays, isHoliday } = require('../src/holidays');


const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);

describe('Holiday functions', () => {
    afterEach(() => {
        mock.reset();
    });

    describe('getHolidays', () => {
        test('return the list of holidays', async () => {
            const holidays = [
                { date: { iso: '2024-02-14' } },
                { date: { iso: '2024-11-20' } }
            ];
            mock.onGet(`https://calendarific.com/api/v2/holidays?api_key=${CALENDARIFIC_API_KEY}&country=${COUNTRY}&year=${YEAR}`).reply(200, {
                response: { holidays }
            });

            const result = await getHolidays();
            expect(result).toEqual(['2024-02-14', '2024-11-20']);
        });

        test('If error while fetching holidays return empty array', async () => {
            mock.onGet(`https://calendarific.com/api/v2/holidays?api_key=${CALENDARIFIC_API_KEY}&country=${COUNTRY}&year=${YEAR}`).reply(500);

            const result = await getHolidays();
            expect(result).toEqual([]);
        });
    });

    describe('isHoliday', () => {
        test('If the day is holiday return true', async () => {
            const date = new Date('2024-01-01');
            const holidays = ['2024-01-01', '2024-12-25'];

            const result = await isHoliday(date, holidays);
            expect(result).toBe(true);
        });

        test('If function is not holiday return false', async () => {
            const date = new Date('2024-07-04');
            const holidays = ['2024-01-01', '2024-12-25'];

            const result = await isHoliday(date, holidays);
            expect(result).toBe(false);
        });
    });
});
