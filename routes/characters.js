const express = require("express")
const router = express.Router()
const axios = require('axios')



// Route pour récuperer la liste des personnages marvel par 100
router.get('/characters', async (req, res) => {
    try {
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&limit=100`)
        console.log(response.data);
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})






module.exports = router

// Faire une route dans notre back qui interroge l'api et qui ramène les élements demandés v