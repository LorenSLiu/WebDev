// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// import * as express from 'express';
// import * as cors from 'cors';
// import { MongoClient } from 'mongodb';
//
// admin.initializeApp();
//
// const app = express();
// app.use(cors({ origin: true }));
//
// app.get('/getMongoData', async (request, response) => {
//     const queryString = request.query.queryString as string;
//
//     if (!queryString) {
//         return response.status(400).send('Query string is required.');
//     }
//
//     const uri = 'mongodb://<MongoDB连接字符串>';
//     const client = new MongoClient(uri, { useNewUrlParser: true });
//
//     try {
//         await client.connect();
//         const collection = client.db('your-database-name').collection('your-collection-name');
//         const result = await collection.find({ /* Define your query based on queryString */ }).toArray();
//         response.json(result);
//     } catch (error) {
//         console.error(error);
//         response.status(500).send('Error connecting to MongoDB');
//     } finally {
//         await client.close();
//     }
// });
//
// export const getMongoData = functions.https.onRequest(app);
