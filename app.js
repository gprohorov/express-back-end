
/*const message = "Hello, world  from node Express.js";
console.log(message);
*/
//   install ES6
// npm i -D babel-cli babel-preset-env babel-preset-stage-0
// npm i -D nodemon
// npm i -S express

import express from 'express'
import items from './data/items.json'
import ItemRoute from'./routes/ItemRoute'
import morgan from 'morgan'

const PORT = 3000;
const server = express();
const buildUrl = (version, path) => `/api/${version}/${path}`;
const ITEMS_BASE_URL = buildUrl('v1', 'items');

server.use(ITEMS_BASE_URL, ItemRoute);
server.use(morgan('tiny'));


server.listen(PORT, ()=>{
  //  console.log(buildUrl('v1', 'items'));
   console.log(`Server has been started on port ${PORT}`);  //  другие КАВЫКИ!!!!!!!!!!
});


