const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT } = require('./src/constants');
const { calculateDueDate } = require('./main');
const { isNotWithinWorkingHours } = require('./src/isNotWithinTheWorkingHour');
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.post('/calculateDueDate', async (req, res) => {
    const { submitDate, turnaroundHours } = req.body;
    const result = await calculateDueDate(new Date(submitDate), turnaroundHours);

    if (await isNotWithinWorkingHours(submitDate)) {
        res.json({ Data: "Please add request during working hours" });
    } else {
        res.json({ dueDate: result.dueDate, dueTime: result.dueTime });
    }
});

app.post('/calculateDueDate-force', async (req, res) => {
    const { submitDate, turnaroundHours } = req.body;
    const result = await calculateDueDate(new Date(submitDate), turnaroundHours);
    res.json({ dueDate: result.dueDate, dueTime: result.dueTime });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
