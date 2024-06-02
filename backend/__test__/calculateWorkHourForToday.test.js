const { calculateWorkingHoursToday } = require('../src/calculateWorkingHoursToday');


describe('calculate the working hours left for today', () => {
    it('must calculate the remaining working hours when give time within working hours', () => {
        const date = new Date('2024-06-01T14:30:00');
        const result = calculateWorkingHoursToday(date);
        expect(result).toBe(2.5);
    });

    it('mst return a negative value if the time is after working hours', () => {
        const date = new Date('2024-06-01T18:00:00');
        const result = calculateWorkingHoursToday(date);
        expect(result).toBe(-1); 
    });

    it('must calculate the left working hours when the time is similar to the start of working hours', () => {
        const date = new Date('2024-06-01T09:00:00'); 
        const result = calculateWorkingHoursToday(date);
        expect(result).toBe(8);
    });

    it('must calculate the remaining working hours if the time is little before the end of working hours', () => {
        const date = new Date('2024-06-01T16:59:00'); 
        const result = calculateWorkingHoursToday(date);
        expect(result).toBeCloseTo(0.0166667, 4);
    });

    it('must return 0 when the time is similar to the end of working hours', () => {
        const date = new Date('2024-06-01T17:00:00');
        const result = calculateWorkingHoursToday(date);
        expect(result).toBe(0);
    });

});
