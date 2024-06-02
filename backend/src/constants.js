require('dotenv').config();

const PORT = process.env.PORT;
const CALENDARIFIC_API_KEY = process.env.CALENDARIFIC_API_KEY;
const COUNTRY = process.env.COUNTRY;
const YEAR = process.env.YEAR;

module.exports = {
    PORT,
    CALENDARIFIC_API_KEY,
    COUNTRY,
    YEAR
};
