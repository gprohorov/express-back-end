
/*const message = "Hello, world  from node Express.js";
console.log(message);
*/
//   install ES6
// npm i -D babel-cli babel-preset-env babel-preset-stage-0
// npm i -D nodemon
// npm i -S express

import express from 'express'
import items from './data/items.json'
import ldsh from 'lodash'

const PORT = 3000;
const server = express();
const buildUrl = (version, path) => `/api/${version}/${path}`;
const ITEMS_BASE_URL = buildUrl('v1', 'items');

server.get('/', (req, res) => {
    res.send(" my first route");
});

server.get(ITEMS_BASE_URL,     (req, res) => {
    res.json(items);
    });

server.get(`${ITEMS_BASE_URL}/:id`,     (req, res) => {
    const item = ldsh.find(items, item => item.id === req.params.id)
    if(item){
        res.json(item)
    }else {
        res.send(`item ${id} is absent` )
    }


    // console.log(req.params.id);
   // res.end();
    });

//  npm i -S lodash    !!!!!!!!

server.post(ITEMS_BASE_URL,     (req, res) => {
    console.log(`POST method is processed`);
    res.end();


    });
server.put(ITEMS_BASE_URL,     (req, res) => {
    console.log(`PUT method is processed`);
    res.end();
    });
server.delete(ITEMS_BASE_URL,     (req, res) => {
    console.log(`DELETE method is processed`);
    res.end();
    });



server.listen(PORT, ()=>{
  //  console.log(buildUrl('v1', 'items'));
   console.log(`Server has been started on port ${PORT}`);  //  другие КАВЫКИ!!!!!!!!!!
});


