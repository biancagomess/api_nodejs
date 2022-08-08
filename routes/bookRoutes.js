const router = require('express').Router()
const Book = require('../models/Book')


// POST (create)
router.post('/', async (req, res) => {
    const { title, publisher, author, edition, pages, isbn, borrowed } = req.body

    const book = {
        title,
        publisher,
        author,
        edition,
        pages,
        isbn,
        borrowed,

    }

    try {
        await Book.create(book)
        res.status(201).json({ message: 'Book successfully registered' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error })
    }

})

// GET all (read)

router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json({ books })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// GET with id (read)

router.get('/:id', async (req, res) => {
    const id = req.params.id

    if (id.length < 12 || id.length > 24) {
        res.status(422).json({ message: "Book doesn't exist" })
        return
    }
    try {
        const book = await Book.findOne({ _id: id })
        if (!book) {
            res.status(422).json({ message: "Book not found" })
            return
        }
        res.status(200).json({ book })
    } catch (error) {
        res.status(500).json({ error: error })
    }

})


// PUT (update all)
router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const { title, publisher, author, edition, pages, isbn, borrowed } = req.body

    const book = {
        title,
        publisher,
        author,
        edition,
        pages,
        isbn,
        borrowed,
    }

    try {
        const updateBook = await Book.updateOne({ _id: id }, book)
        if (updateBook.matchedCount === 0) {
            res.status(422).json({ message: 'Book not found' })
        }
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// Delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const book = await Book.findOne({ _id: id })
    if (!book) {
        res.status(422).json({ message: 'Bok not found' })
        return
    }
    try {
        await Book.deleteOne({ _id: id })
        res.status(200).json({ message: "Book was successfully removed" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router