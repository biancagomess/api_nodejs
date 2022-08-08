const router = require('express').Router()
const Loan = require('../models/loan')


// POST
router.post('/', async (req, res) => {
    const { book, person } = req.body

    const loan = {
        book,
        person
    }

    try {
        await Loan.create(loan)
        res.status(201).json({ message: 'Successfully borrowed book. You have 15 days to return it. Happy reading!!!' })

    } catch (error) {
        res.status(500).json({ error: error })

    }

})

router.get('/', async (req, res) => {
    try {
        const loans = await Loan.find()
        res.status(200).json({ loans })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id

    if (id.length < 12 || id.length > 24) {
        res.status(422).json({ message: "There is no loan for this id" })
    }

    try {
        const loan = await Loan.findOne({ _id: id })

        if (!loan) {
            res.status(422).json({ message: "Loan not found" })
            return
        }
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const { book, person } = req.body

    const loan = {
        book,
        person
    }

    try {
        const updateLoan = await Loan.updateOne({ _id: id }, loan)
        if (updateLoan.matchedCount === 0) {
            res.status(422).json({ message: 'Loan not found' })
        }

        res.status(200).json({ loan })
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const loan = await Loan.findOne({ _id: id })
    if (!loan) {
        res.status(422).json({ message: "Loan not found" })
        return
    }
    try {
        await Loan.deletOne({ _id: id })
        res.staust(200).json({ message: "Loan was successfully remove" })

    } catch (error) {
        res.status(500).json({ error: error })
    }

})
module.exports = router;