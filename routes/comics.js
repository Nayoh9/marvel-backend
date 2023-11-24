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




module.exports = router