// Package import
const express = require("express")
const router = express.Router()
const uid = require('uid2'); // Generation de string
const SHA256 = require("crypto-js/sha256"); // Encryptage de string
const encBase64 = require("crypto-js/enc-base64"); // Transforme l'encryptage en string

// Model import 
const User = require('../Models/User')

// Function import 
const isAuthenticated = require("../middlewares/isAuthenticated")

// Route to create a new user
router.post('/signup', async (req, res) => {
    console.log(req.body);

    try {
        const { username, email, password, confirmPassword } = req.body
        console.log(req.body);

        if (!username || !username.trim()) {
            console.log("You need a name to signin");
            return res.status(400).json("You need a name to signin")
        }

        if (!password || !password.trim()) {
            console.log("You need a password to signin");
            return res.status(400).json("You need a password to signin")
        }

        if (password !== confirmPassword) {
            console.log("passwords must be the same");
            return res.status(400).json("Passwords must be the same")
        }

        let count = 0;
        for (i = 0; i < email.length; i++) {
            if (email[i] === "@") {
                count++
            }
        }

        if (!email || !email.trim() || count !== 1) {
            return res.status(400).json('You need an email to signin')
        }

        const existInDb = await User.findOne({ email: email })

        if (existInDb) {
            return res.status(400).json("this email already exist")
        }

        const token = uid(16)
        const salt = uid(16)
        const hash = SHA256(password + salt).toString(encBase64)

        const user = new User({
            username: username,
            email: email,
            token: token,
            hash: hash,
            salt: salt
        })

        await user.save()

        res.status(200).json({
            message: "user created",
            username: username,
            email: email,
            token: token
        })

    } catch (error) {
        console.log({ message: error.message });;
    }
})

// Route to connect an existing account in DB 
router.post("/signin", async (req, res) => {

    try {
        const { email, password } = req.body


        if (!email || !email.trim()) {
            return res.status(400).json('Wrong email or password')
        }

        if (!password || !password.trim()) {
            return res.status(400).json('Wrong email or password')
        }

        const existInDb = await User.findOne({ email: email })

        if (!existInDb) {
            return res.status(400).json('Wrong email or password')
        }

        const hash2 = SHA256(password + existInDb.salt).toString(encBase64)

        if (hash2 === existInDb.hash) {
            console.log("same");
            return res.status(200).json(existInDb.token)

        } else {
            return res.status(400).json("Wrong email or password")
        }



    } catch (error) {
        console.log({ message: error.message })
    }

})

// Route to update the favlist of an existing user 
router.put("/user/update", isAuthenticated, async (req, res) => {
    try {
        console.log(req.body);
        const { key_fav_list, value_fav_list } = req.body

        console.log(value_fav_list);

        const bearer = req.headers.authorization
        const token = bearer.replace("Bearer ", "")
        const user = await User.findOneAndUpdate({ token: token }, {
            [key_fav_list]: value_fav_list
        })

        await User.save

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Route to find a user favlist with its token 

router.get("/user/find", isAuthenticated, async (req, res) => {
    try {
        const bearer = req.headers.authorization
        const token = bearer.replace("Bearer ", "")
        const user = await User.findOne({ token: token })
        // console.log(user.fav_list);
        res.status(200).json(user.fav_list)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router