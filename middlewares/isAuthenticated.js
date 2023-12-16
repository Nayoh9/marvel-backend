// Model import 
const User = require('../Models/User')

const isAuthenticated = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(400).json("Unauthorized")
        }

        const bearer = req.headers.authorization
        const token = bearer.replace("Bearer ", "")
        const user = await User.findOne({ token: token })

        if (!user) {
            return res.status(400).json("Unauthorized")
        } else {
            next()
        }


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = isAuthenticated