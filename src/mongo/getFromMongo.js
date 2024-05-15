import {MongoClient} from 'mongodb'
const url = "mongodb+srv://baires468:WWENetwork888!@cluster0.md2aufz.mongodb.net/";

export const getFromMongo = async (coll, query) => {
    const client = new MongoClient(url);

    await client.connect();

    const db = client.db('library');

    const collection = db.collection(coll);

    const result = collection.find(query).toArray();

    //await client.close();

    return result;
}