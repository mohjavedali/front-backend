const mongoose = require('mongoose');

const db_url = process.env.MONGODB_URI || 'mongodb://localhost/react-app';

mongoose.connect(db_url)
    .then(() => console.log('MongoDB Connected...'))

