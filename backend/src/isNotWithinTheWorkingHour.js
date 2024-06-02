const { getHolidays, isHoliday } = require('./holidays');

async function isNotWithinWorkingHours(submitDate) {
    const dueDate = new Date(submitDate);
    const holidays = await getHolidays();

    return (
        (await isHoliday(dueDate, holidays) && dueDate.getDay() !== 4) ||
        ((dueDate.getDay() === 6 || // Saturday
        dueDate.getDay() === 0 ||   // Sunday
        dueDate.getHours() < 9 || 
        dueDate.getHours() >= 17 ))
    );
}

module.exports = { isNotWithinWorkingHours };


