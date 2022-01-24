import { Request, Response } from "express";
const express = require('express');
const { PORT } = require('./config/config');
const emailRouters = require('./routers/email.routers');
require('dotenv').config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/email', emailRouters);

app.listen(PORT, () => {
    console.log(`App listen port: ${PORT}`);
});
