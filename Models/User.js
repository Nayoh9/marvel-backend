// Package import
const mongoose = require("mongoose");

const User = mongoose.model("User", {
    username: String,
    email: String,
    token: String,
    hash: String,
    salt: String,
    fav_list: Array,
})

module.exports = User