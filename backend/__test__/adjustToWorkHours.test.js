const { adjustToWorkingHours } = require('../src/adjustToWorkingHours');

const WORK_START_HOUR = 9;

describe('adjustToWorkingHours', () => {
    it('Adjust the working hour as next working day morning if user enterd hour if after 17:00', () => {
        const date = new Date('2024-06-03T18:00:00');
        const result = adjustToWorkingHours(date);
        expect(result.getHours()).toBe(WORK_START_HOUR);
        expect(result.getDate()).toBe(date.getDate());
    });

    it('Adjust the working hours as same day morning 9:00 if user entered hour is before morning', () => {
        const date = new Date('2024-06-01T08:00:00');
        const result = adjustToWorkingHours(date);
        expect(result.getHours()).toBe(WORK_START_HOUR);
        expect(result.getDate()).toBe(date.getDate());
    });

    it('It should not adjust given hours in the working hours', () => {
        const date = new Date('2024-06-01T10:00:00');
        const result = adjustToWorkingHours(date);
        expect(result.getHours()).toBe(10);
        expect(result.getDate()).toBe(date.getDate());
    });

    it('should adjust to the next working day if give hours in exact same as end of the working hour', () => {
        const date = new Date('2024-06-03T17:00:00');
        const result = adjustToWorkingHours(date);
        expect(result.getHours()).toBe(WORK_START_HOUR);
        expect(result.getDate()).toBe(date.getDate());
    });

    it('should adjust to the start of the working day if exactly at the start of work hours', () => {
        const date = new Date('2024-06-01T09:00:00');
        const result = adjustToWorkingHours(date);
        expect(result.getHours()).toBe(WORK_START_HOUR);
        expect(result.getDate()).toBe(date.getDate());
    });
});
