const express = require('express');
const {MongoClient} = require('mongodb');

const app = express();
const port = 3000;

const mongoURL = 'mongodb://localhost:27017';
const dbName = 'excelDB';
const collectionName = 'data';

app.get('/api/data', async (req, res) => {
    const client = new MongoClient(mongoURL);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const data = await collection.find({}).toArray();
        res.json(data);
    } finally {
        await client.close();
    }

});

app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
})