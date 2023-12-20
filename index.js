// Package import
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_IP)

const hello = "test"

const app = express()
app.use(express.json())
app.use(cors())


// Routes
const charactersRoute = require('./routes/characters')
const comicsRoute = require('./routes/comics')
usersRoute = require('./routes/user')
// Routes

app.use(charactersRoute)
app.use(comicsRoute)
app.use(usersRoute)

app.all('*', (req, res) => {
    res.status(404).json("This route does not exist")
})

if (process.env.PORT) {
    app.listen(process.env.PORT, () => {
        console.log("Server started");
    });
} else {
    app.listen(3000, () => {
        console.log("Server started 3000");
    });
}
