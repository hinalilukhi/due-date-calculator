const { getHolidays, isHoliday } = require('./src/holidays');
const { adjustToWorkingHours } = require("./src/adjustToWorkingHours");

async function calculateDueDate(submitDate, turnaroundHours) {
    let dueDate = new Date(submitDate);
    let hoursRemaining = turnaroundHours;

    const holidays = await getHolidays();
    dueDate = adjustToWorkingHours(dueDate); 



    return {
        dueDate: dueDate.toISOString().split('T')[0],
        dueTime: dueDate.toLocaleTimeString('en-US', { hour12: true })
    };
}

module.exports = { calculateDueDate };
