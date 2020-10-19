import express from 'express'
import items from '../data/items.json'
import ldsh from 'lodash'


const router = express.Router();

router.get('/',     (req, res) => {
    res.json(items);
});

router.get('/:id',     (req, res) => {
    const item = ldsh.find(items, item => item.id === req.params.id)
    if(item){
        res.json(item)
    }else {
        res.send(`item ${req.params.id} is absent` )
    }
});

//  npm i -S lodash    !!!!!!!!

router.post('/',     (req, res) => {
    console.log(`POST method is processed`);
    res.end();
});

router.put('/',     (req, res) => {
    console.log(`PUT method is processed`);
    res.end();
});

router.delete('/',     (req, res) => {
    console.log(`DELETE method is processed`);
    res.end();
});
module.exports = router;
