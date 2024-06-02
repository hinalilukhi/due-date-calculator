const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT } = require('./src/constants');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.post('/calculateDueDate', async (req, res) => {
    res.send({});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
