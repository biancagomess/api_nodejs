const router = require('express').Router()
const Person = require('../models/Person');

// initial route / endpoint
// API Routes:

// Create
router.post('/', async (req, res) => {
    // req.boddy
    const { name, salary, approved } = req.body

    if (!name || !salary) {
        res.status(422).json({ error: 'Name, salary and approval are required.' })
        return
    }

    const person = {
        name,
        salary,
        approved
    }

    try {
        await Person.create(person)
        res.status(201).json({ message: 'Person successfully entered! ' })
    } catch (error) {
        res.status(500).json({ error: 'test' })
    }

})

// Read
router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json({ people })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    if (id.length < 12 || id.length > 24) {
        res.status(422).json({ message: "User doesn't exist" })
        return
    }
    try {
        const person = await Person.findOne({ _id: id })

        if (!person) {

            res.status(422).json({ message: 'User not found' })
            return
        }

        res.status(200).json(person)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// Update (PUT and PATCH)
router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const { name, salary, approved } = req.body

    const person = {
        name,
        salary,
        approved
    }

    try {
        const updatedPerson = await Person.updateOne({ _id: id }, person)
        if (updatedPerson.matchedCount === 0) {
            res.status(422).json({ message: 'User not found' })
        }
        res.status(200).json(person)

    } catch (error) {
        res.status(500).json({ error: error })

    }

})

// Delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const person = await Person.findOne({ _id: id })


    if (!person) {
        res.status(422).json({ message: 'User not found' })
        return
    }

    try {
        await Person.deleteOne({ _id: id })
        res.status(200).json({ message: "User was successfully removed" })

    } catch (error) {
        res.status(500).json({ error: error })

    }

})
module.exports = router