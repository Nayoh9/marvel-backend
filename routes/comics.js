const express = require("express")
const router = express.Router()
const axios = require('axios')


// Route pour récuperer les comics
router.get('/comics', async (req, res) => {
    try {
        console.log(req.query);

        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&limit=${req.query.limit}&skip=${req.query.skip}&title=${req.query.title}`)
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

        // Nettoyage du tableau
        const comicsId = req.params.id.replace("}", "").split(',')
        console.log(comicsId);
        // map pour récuperer tous les id
        const comicsPromises = comicsId.map(async (id) => {
            console.log(id);
            const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comic/${id}?apiKey=${process.env.MARVEL_API_KEY}`)
            return response.data
        })

        // promise.all attend la résolution de toutes les promesses avant d'envoyer la réponse
        const comicsToSend = await Promise.all(comicsPromises)

        res.json(comicsToSend)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})



module.exports = router