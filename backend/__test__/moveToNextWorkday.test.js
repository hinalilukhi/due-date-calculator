const { moveToNextWorkingDay } = require('../src/moveToNextWorkDay');

const WORK_START_HOUR =9;
describe('Move to next working day || check for saturaday and sunday', () => {
   
    it('Move to next monday if weekday and hour entered is after the working hours', () => {
        const date = new Date('2024-06-14T18:00:00'); 
        const result = moveToNextWorkingDay(date);
        expect(result.getHours()).toBe(WORK_START_HOUR);
        expect(result.getDate()).toBe(17);
    });


    it('Set the date for next monday if entered date is Sunday', () => {
        const date = new Date('2024-06-16T10:00:00'); 
        const result = moveToNextWorkingDay(date);
        expect(result.getHours()).toBe(WORK_START_HOUR);
        expect(result.getDate()).toBe(17);
    });

    it('Move to next day if weekday and hour entered is after the working hours', () => {
        const date = new Date('2024-06-13T08:00:00'); 
        const result = moveToNextWorkingDay(date);
        expect(result.getHours()).toBe(WORK_START_HOUR);
        expect(result.getDate()).toBe(14);
    });

    it('Set the date for next monday if entered date is Saturday', () => {
        const date = new Date('2024-06-15T10:00:00');
        const result = moveToNextWorkingDay(date);
        expect(result.getHours()).toBe(WORK_START_HOUR);
        expect(result.getDate()).toBe(17);
    });

    it('Correctly handle the date near the end of the year', () => {
        const date = new Date('2024-12-31T18:00:00');
        const result = moveToNextWorkingDay(date);
        expect(result.getHours()).toBe(WORK_START_HOUR);
        expect(result.getDate()).toBe(1);
        expect(result.getMonth()).toBe(0);
        expect(result.getFullYear()).toBe(2025);
    });
    
    it('should correctly handle dates near the end of the month', () => {
        const date = new Date('2024-06-30T18:00:00'); 
        const result = moveToNextWorkingDay(date);
        expect(result.getHours()).toBe(WORK_START_HOUR);
        expect(result.getDate()).toBe(1); 
        expect(result.getMonth()).toBe(6);
    });

});
