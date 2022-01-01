"use strict";

// Imports
let express = require("express");
let helmet = require("helmet");
let session = require("express-session");
let nodemailer = require("nodemailer");


// Code

require("dotenv").config();

let hour = 3600000;

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.static("public"));
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

app.listen(3000, () => console.log("Server started"));

//TODO: finish send email functionality

app.post('/mail', async (req, res) => {
    res.status.json({
        message: "Not supported"
    });
});

// Helper functions

let validateEmail = (email) => {
    if (!email)
        return false;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};