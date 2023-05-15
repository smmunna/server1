const router = require('express').Router();
const { ObjectId } = require('mongodb');
const usersCollection = require('../db/mongo')

// Routings;
router.get('/', async (req, res) => {
    const result = await usersCollection.find().toArray()
    res.send(result)
})

router.post('/', async (req, res) => {
    const user = req.body
    const result = await usersCollection.insertOne(user)
    res.send({
        message: "Inserted Successfully",
        result
    })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await usersCollection.findOne(query)
    res.send(result)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await usersCollection.deleteOne(query)
    res.send('Successfully Deleted')
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) }
    const options = { upsert: true };
    const updateDoc = {
        $set: {
            name: req.body.name
        },
    };
    const result = await usersCollection.updateOne(filter, updateDoc, options)
    res.send('Updated succcessfully')
})

module.exports = router