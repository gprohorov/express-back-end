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

mongoose.connect(DB_URL);

const db = mongoose.connection;

db.once('open', () => {
    console.log('----  Connection established -------');
});

const ItemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String
});

const ItemModel = mongoose.model('Item', ItemSchema);



router.get('/', (req, res) => {

    ItemModel.find((err, items) => {
        if (err) res.status(500).send(err);
        res.json(items);
    });
});

router.get('/:id', (req, res) => {

    ItemModel.findById(req.params.id, (err, item) => {
        if (err) res.status(500).send(err);
        if (item) {
            res.json(item);
        } else {
            res.status(404).send(`Item with id ${req.params.id} not found.`);
        }
    });
});


router.post('/',     (req, res) => {

    console.log(`POST method is processed  from app.js`);
    console.log(req.body);

    const id = new mongoose.Types.ObjectId();
    const itemToPersist = Object.assign({
        _id: id
    }, req.body);

    const item = new ItemModel(itemToPersist);
    item.save().then(i => res.send(i) );

});

router.put('/:id', (req, res) => {
    ItemModel.findById(req.params.id, (err, item) => {
      // if (err) res.status(500).send(err);
        if (item) {
            item.name = req.body.name;
            item.description = req.body.description;
            item.save().then( i => {
             //   if (err) res.status(500).send(err);
                res.json(i);
            });
        } else {
            res.status(404).send(`Item with id ${req.params.id} not found.`);
        }
    });
});

router.delete('/:id', (req, res) => {
    ItemModel.findByIdAndRemove(req.params.id, (err, item) => {
        if (err) res.status(500).send(err);
        res.status(200).send(`Item with id ${req.params.id} was deleted`);
    });
});

module.exports = router;
