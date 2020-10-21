import express from 'express';
import items from '../data/items.json';
import ldsh from 'lodash';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const router = express.Router();

const DB_USERNAME = '';
const DB_PASSWOD = '';
const DB_URL = 'mongodb://localhost:27017/item';
// const DB_URL = `mongodb://${DB_USER}:${DB_USER_PASSWORD}@ds215380.mlab.com:15380/sandboxamigoscode`;
mongoose.connect(DB_URL);

const db = mongoose.connection;

db.once('open', () => {
    console.log('----  Connection established -------');
});



router.use(morgan('tiny'));
router.use(bodyParser.json());

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

router.put('/',     (req, res) => {
    console.log(`PUT method is processed`);
    res.end();
});

router.delete('/',     (req, res) => {
    console.log(`DELETE method is processed`);
    res.end();
});

module.exports = router;
