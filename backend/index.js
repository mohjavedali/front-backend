const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 4000;
require('./Connection/db');
const route = require('./Routes/userRouter');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use('/api', route);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
