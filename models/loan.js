const mongoose = require('mongoose')

const Loan = mongoose.model('Loan', {
    book: String,
    person: String
})

module.exports = Loan;