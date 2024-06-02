const { WORK_END_HOUR } = require('./constants');

function calculateWorkingHoursToday(date) {
    const endOfDay = new Date(date);
    endOfDay.setHours(WORK_END_HOUR, 0, 0, 0); 
    return (endOfDay - date) / (1000 * 60 * 60); //convert milisecond in the hour by dividing it as minits(1000 * 60) and seconds
}

module.exports = { calculateWorkingHoursToday };

// Calculte the remaining working hours left in the submit day