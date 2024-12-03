const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const auth = async(req, res, next) => {

    const token = req.headers.authorization;

    if(!token) {
        return res.status(400).json({message: "Not logged in"});
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {id: decodedToken.id};
        next();

    } catch (err) {
        console.log("Authorization Header:", req.headers.authorization);
        return res.status(400).json({message: "Invalid token"});
    }
    

}


module.exports = auth;


