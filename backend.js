const express = require('express');

const app = express();

app.get("/", (request, response) => {
    response.send("hello lovely person");
});

app.listen(8022, () => {
    console.log("check it out: http://localhost:8022");
});
