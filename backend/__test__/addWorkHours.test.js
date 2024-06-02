const { addWorkingHours } = require('../src/addWorkHours');

describe('add work hours to submit date', () => {
    it('must add working hours to submit date', () => {
        const date = new Date('2024-06-01T14:30:00');
        const result = addWorkingHours(date, 2);
        expect(result.getHours()).toBe(16);
        expect(result.getMinutes()).toBe(30);
    });

    it('must add fractional work hours to the submit date', () => {
        const date = new Date('2024-06-01T14:30:00');
        const result = addWorkingHours(date, 2.5);
        expect(result.getHours()).toBe(17); 
        expect(result.getMinutes()).toBe(0);
    });

    it('must handle adding hours to next day', () => {
        const date = new Date('2024-06-01T16:30:00'); 
        const result = addWorkingHours(date, 4);
        expect(result.getHours()).toBe(20);
        expect(result.getMinutes()).toBe(30); 
    });

    it('must handle adding negative hours', () => {
        const date = new Date('2024-06-01T14:30:00');
        const result = addWorkingHours(date, -2);
        expect(result.getHours()).toBe(12); 
        expect(result.getMinutes()).toBe(30); 
    });

    it('must handle adding fractional hours crossing into the next day', () => {
        const date = new Date('2024-06-01T16:30:00');
        const result = addWorkingHours(date, 4.5);
        expect(result.getHours()).toBe(21);
        expect(result.getMinutes()).toBe(0);
    });


});
