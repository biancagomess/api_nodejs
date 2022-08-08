const mongoose = require('mongoose')

const Book = mongoose.model('Book', {
    title: String,
    publisher: String,
    author: String,
    edition: String,
    pages: Number,
    isbn: Number,
    borrowed: Boolean,

})

module.exports = Book;