const express = require("express")
const router = express.Router()
const axios = require('axios')

// Route pour récuperer la liste des personnages marvel par 100
router.get('/characters', async (req, res) => {
    try {
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&limit=${req.query.limit}&skip=${req.query.skip}&name=${req.query.name}`)

        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Route pour récuperer tous les informations d'un personnage avec son id 
router.get('/character/:id', async (req, res) => {
    try {
        // console.log(req.params.id);
        const id = req.params.id

        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${process.env.MARVEL_API_KEY}`)
        // console.log(response.data);

        res.status(200).json(response.data)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router

