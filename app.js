
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
import mongoose from 'mongoose'


const PORT = 3000;
const server = express();
const buildUrl = (version, path) => `/api/${version}/${path}`;
const ITEMS_BASE_URL = buildUrl('v1', 'items');

const DB_USERNAME = '';
const DB_PASSWOD = '';
const DB_URL = 'mongodb://localhost:27017/item';
// const DB_URL = `mongodb://${DB_USER}:${DB_USER_PASSWORD}@ds215380.mlab.com:15380/items`;

let studentsArray = students;

server.use(ITEMS_BASE_URL, ItemRoute);
server.use(morgan('tiny'));
server.use(bodyParser.json());
server.set('views', path.join('views'));
server.set('view engine', 'ejs');

const ItemSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   name: String,
   description: String
});

const ItemModel = mongoose.model('Item', ItemSchema);




server.get('/hello',     (req, res) => {
   res.send('HELLO!');
});

server.get('/',     (req, res) => {
   res.render('index', {items});
});

server.post('/app',     (req, res) => {
   console.log(`POST method is processed  from app.js`);
   console.log(req.body);

   const id = new mongoose.Types.ObjectId();
   const itemToPersist = Object.assign({
      _id: id
   }, req.body);

   const item = new ItemModel(itemToPersist);

   item.save().then((err, student) => {
      if (err) res.status(500).send(err);
      res.json(item);
   });

   server.listen(PORT, () => {
      //  console.log(buildUrl('v1', 'items'));
      console.log(`Server has been started on port ${PORT}`);  //  другие КАВЫКИ!!!!!!!!!!
   });
