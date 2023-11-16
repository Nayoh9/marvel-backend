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
        // console.log(req.params.id);

        // je récupere mes params sous chaine de caractère je les clean puis les transforme en tableau
        const comicsId = req.params.id.replace("}", "")
            .split(',')

        const comicsToSend = []

        for (let i = 0; i < comicsId.length; i++) {
            // console.log(comicsId[i]); 

            // Je passe en params la valeur de i à chaque tour pour récuperer ses infos
            const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comic/${comicsId[i]}?apiKey=${process.env.MARVEL_API_KEY}`)

            console.log(response.data);

            // A chaque tour je push la reponse de l'api dans mon tableau
            comicsToSend.push(response.data)
        }

        // J'envoie mon tableau
        res.json(comicsToSend)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})



module.exports = router