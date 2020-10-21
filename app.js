
/*const message = "Hello, world  from node Express.js";
console.log(message);
*/
//   install ES6
// npm i -D babel-cli babel-preset-env babel-preset-stage-0
// npm i -D nodemon
// npm i -S express
// npm i -S morgan
// npm i -S body-parser
// npm i -S mongoose


import express from 'express';
import items from './data/items.json';
import ItemRoute from'./routes/ItemRoute';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';


const PORT = 3000;
const server = express();
const buildUrl = (version, path) => `/api/${version}/${path}`;
const ITEMS_BASE_URL = buildUrl('v1', 'items');

server.use(ITEMS_BASE_URL, ItemRoute);
server.use(morgan('tiny'));
server.use(bodyParser.json());
server.set('views', path.join('views'));
server.set('view engine', 'ejs');


server.get('/hello',     (req, res) => {
   res.send('HELLO!');
});

server.get('/',     (req, res) => {
   res.render('index', {items});
});

server.post('/app',     (req, res) => {
   console.log(`POST method is processed  from app.js`);
   console.log(req.body);

   res.end();
});

server.listen(PORT, ()=>{
  //  console.log(buildUrl('v1', 'items'));
   console.log(`Server has been started on port ${PORT}`);  //  другие КАВЫКИ!!!!!!!!!!
});

/*
*
*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:<password>@cluster0.kn0fx.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*
*
*
*
* */
