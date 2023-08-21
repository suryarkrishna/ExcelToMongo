const {MongoClient} = require('mongodb');
const jsonData = require('./readExcel');

const mongoURL = 'mongodb://localhost:27017';
const dbName = 'excelDB';
const collectionName = 'data';

async function storeDataInMongo() {
    const client = new MongoClient(mongoURL);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        await collection.insertMany(jsonData);
    } finally {
        await client.close();
    }
}

storeDataInMongo();