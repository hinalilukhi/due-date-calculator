require('dotenv').config();

const PORT = process.env.PORT;
const CALENDARIFIC_API_KEY = process.env.CALENDARIFIC_API_KEY;
const COUNTRY = process.env.COUNTRY;
const YEAR = process.env.YEAR;
const WORK_START_HOUR = process.env.WORK_START_HOUR;
const WORK_END_HOUR = process.env.WORK_END_HOUR;
const HOURS_PER_WORKDAY = WORK_END_HOUR - WORK_START_HOUR;

module.exports = {
    PORT,
    CALENDARIFIC_API_KEY,
    COUNTRY,
    YEAR,
    WORK_START_HOUR,
    WORK_END_HOUR,
    HOURS_PER_WORKDAY
};
