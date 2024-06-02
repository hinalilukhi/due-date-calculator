function addWorkingHours(date, hours) {
    date.setHours(date.getHours() + Math.floor(hours));
    date.setMinutes(date.getMinutes() + (hours % 1) * 60);
    return date;
}

module.exports = { addWorkingHours };

// add specific number of work hours to the given date