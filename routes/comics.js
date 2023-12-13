// Package import
const express = require("express")
const router = express.Router()
const axios = require('axios')


// Route to recover comics
router.get('/comics', async (req, res) => {
    try {
        // console.log(req.query);
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&limit=${req.query.limit}&skip=${req.query.skip}&title=${req.query.title}`)
        // console.log(response.data);
        res.status(200).json(response.data)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Route to recover comic informations with its ID
router.get('/comic/:id', async (req, res) => {
    try {
        const id = req.params.id
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comic/${id}?apiKey=${process.env.MARVEL_API_KEY}`)
        res.status(200).json(response.data)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})

module.exports = router