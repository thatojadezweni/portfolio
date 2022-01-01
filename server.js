"use strict";

// Imports
let express = require("express");
let helmet = require("helmet");
let session = require("express-session");


// Code

require("dotenv").config();

let hour = 3600000;

const app = express();

app.use(helmet());

app.use(session({
    name: 'session',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: hour,
        expires: new Date(Date.now() + hour)
    }
}));

app.use(express.static("public"));

app.listen(3000, () => console.log("Server started"));

app.post('/mail', (req, res) => {
    console.log(req.body);
    res.send("Thank you for your message");
});