const express = require('express');

const app = express();

const path = require('path');

// Send files from the public directory
app.use(express.static(path.resolve(__dirname, 'public')));

// Handling JSON data 
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended:true})); // to support URL-encoded bodies

const data = require("./public/categories.json");

app.get("/", (request, response) => {
    response.sendFile("index.html");
});

//my API

//GET - /api
app.get("/api", (request, response) => {
    response.json(data);
});

app.listen(8022, () => {
    console.log("check out the magic at: http://localhost:8022")
})