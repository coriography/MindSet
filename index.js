const express = require('express');

const app = express();

const path = require('path');

// Send files from the public directory
app.use(express.static(path.resolve(__dirname, 'public') ));

// Handling JSON data 
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended:true})); // to support URL-encoded bodies

let myData = [
    {id:1, color:"red", x:50, y: 200},
    {id:2, color:"orange", x:100, y: 200},
    {id:3, color:"yellow", x:150, y: 200},
    {id:4, color:"green", x:200, y: 200},
    {id:5, color:"blue", x:250, y: 200},
    {id:6, color:"purple", x:300, y: 200}
];

app.get("/", (request, response) => {
    response.sendFile("index.html");
});

app.listen(8022, () => {
    console.log("check out the magic at: http://localhost:8022")
})

//my API

//GET - /api
app.get("/api", (request, response) => {
    response.json(myData);
});