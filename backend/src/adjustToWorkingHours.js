const { WORK_START_HOUR, WORK_END_HOUR } = require('./constants');

function adjustToWorkingHours(date) {
    if (date.getHours() >= WORK_END_HOUR) {
        date.setHours(WORK_START_HOUR, 0, 0, 0);
        date.setDate(date.getDate() + 1);
    } else if (date.getHours() < WORK_START_HOUR) {
        date.setHours(WORK_START_HOUR, 0, 0, 0);
    }
    return date;
}

module.exports = { adjustToWorkingHours };
// set working hour to 9:00 o'clock if hour entered is smaller than 9, 
// set work hour as next day 9'clock if hour entered is greated then 17