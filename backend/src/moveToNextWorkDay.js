const { WORK_START_HOUR } = require('./constants');

function moveToNextWorkingDay(date) {
    date.setHours(WORK_START_HOUR, 0, 0, 0);
    date.setDate(date.getDate() + 1);
    if (date.getDay() === 6) date.setDate(date.getDate() + 2);
    if (date.getDay() === 0) date.setDate(date.getDate() + 1);
    return date;
}

module.exports = { moveToNextWorkingDay };

// Move to next working day while skipping saturay and sunday
