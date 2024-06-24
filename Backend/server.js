const express = require('express');
const mongoDb = require('./connection');
const app = express();
const cors = require('cors');
const router = require('./routes/route');

require("dotenv").config();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());


// function for connection mongoDB
mongoDb();

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port "+process.env.PORT);
})
app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use('/',router);