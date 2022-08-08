// initial config
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Read json form / middlewares:
// initialize read json files
app.use(
    express.urlencoded({
        extend: true
    })
)

// close read json files
app.use(express.json())


// routes:
// Person:
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

// Book:
const bookRoutes = require('./routes/bookRoutes')
app.use('/book', bookRoutes)

const loanRoutes = require('./routes/loanRoutes')
app.use('/loan', loanRoutes)


app.get('/', (req, res) => {

    // show requisition
    res.json({ message: 'Hi People Express!' })
})


// port for acess 
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.fh2zmrr.mongodb.net/databaseapi?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conected to MongoDB!")
        app.listen(process.env.PORT),
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    })
    .catch((err) => console.log(err))

