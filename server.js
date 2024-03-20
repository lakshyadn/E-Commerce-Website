const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; // default MongoDB connection URL
const dbName = 'trendify'; // name of your database

MongoClient.connect(url, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const express = require('express');
    const app = express();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});