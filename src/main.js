import { getFromMongo } from "./mongo/getFromMongo.js";

const books = await getFromMongo("books", 
{   
    year: {$gte: 2000}
},
{year: 1}
);

console.log(books);