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
const tabComics = []
router.get('/character/:id', async (req, res) => {
    try {
        const id = req.params.id.replace("}", "")

        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/character/${id}?apiKey=${process.env.MARVEL_API_KEY}`)

        const comics = response.data.comics
        // console.log(comics);

        const tabComics = []

        comics.map(async (comic) => {
            // console.log(comic);
            const responseComic = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comic/${comic}?apiKey=${process.env.MARVEL_API_KEY}`)

            tabComics.push(responseComic.data)

            if (tabComics.length === comics.length) {
                res.status(200).json(tabComics)
            }
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router

