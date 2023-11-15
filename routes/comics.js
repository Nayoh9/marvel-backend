const express = require("express")
const router = express.Router()
const axios = require('axios')


// Route pour récuperer les comics
router.get('/comics', async (req, res) => {
    try {
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`)
        // console.log(response.data);
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})


// Route pour récuperer les comics en utilisant les id des super-héros

// Attend en params les id contenus dans la clef comics de chaque super héro
router.get('/comics/comics/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        // J'utilise à nouveau point split pour recreer un tableau à partir de ma string

        const comicsId = req.params.id.replace("}", "")
            .split(',')

        console.log(comicsId);

        res.json(comicsId)

        // const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comic/${idComics}?apiKey=${process.env.MARVEL_API_KEY}`)



    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})



module.exports = router