const { getHolidays, isHoliday } = require('./src/holidays');
const { adjustToWorkingHours } = require("./src/adjustToWorkingHours");
const { moveToNextWorkingDay } = require("./src/moveToNextWorkDay");
const { calculateWorkingHoursToday } = require("./src/calculateWorkingHoursToday");
const { addWorkingHours } = require("./src/addWorkHours");

async function calculateDueDate(submitDate, turnaroundHours) {
    let dueDate = new Date(submitDate);
    let hoursRemaining = turnaroundHours;

    const holidays = await getHolidays();
    dueDate = adjustToWorkingHours(dueDate);

    while (hoursRemaining > 0) {
        dueDate = adjustToWorkingHours(dueDate); 
        // adjust the submit time in the working hour for example user requested on 8:00 o'clock, it got adjust to 9:00

        if (await isHoliday(dueDate, holidays) && dueDate.getDay() !== 4) { // Check if submit day is holiday and not a thirsday
            dueDate = moveToNextWorkingDay(dueDate); // if day is holiday move to next day except for thursdya
            continue;
        }

        const workingHoursToday = calculateWorkingHoursToday(dueDate); // left work hour for today

        if (workingHoursToday >= hoursRemaining) {
             // if hour left for today is greater than turn around time it will set the date for today
            dueDate = addWorkingHours(dueDate, hoursRemaining);
            hoursRemaining = 0;
        } else {
            // if hour left for today is smaller it will loop untill it add up the turn around time into specific day
            hoursRemaining -= workingHoursToday;
            dueDate = moveToNextWorkingDay(dueDate);
        }
    }


    return {
        dueDate: dueDate.toISOString().split('T')[0],
        dueTime: dueDate.toLocaleTimeString('en-US', { hour12: true })
    };
}

module.exports = { calculateDueDate };
