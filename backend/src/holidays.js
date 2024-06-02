const axios = require('axios');
const { CALENDARIFIC_API_KEY, COUNTRY, YEAR } = require('./constants');

async function getHolidays() {
    const url = `https://calendarific.com/api/v2/holidays?api_key=${CALENDARIFIC_API_KEY}&country=${COUNTRY}&year=${YEAR}`;
    try {
        const res = await axios.get(url);
        return res.data.response.holidays.map(holiday => holiday.date.iso);
    } catch (error) {
        console.error('Error while fetching the holidays :)', error);
        return [];
    }
}

async function isHoliday(date, holidays) {
    const dateString = date.toISOString().split('T')[0];
    return holidays.includes(dateString);
}

module.exports = { getHolidays, isHoliday };
//check if given day is holiday or not