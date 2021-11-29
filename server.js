const express = require("express");
const app = express();
const port = 9090;
// const http = require("http");
// const https = require("https");

// const fs = require('fs');


const app = express();

app.get('/', (req, res) =>{
    res.send('port 9090 running');
})

app.listen(port, () => {
    console.log(`app listening at ${port}`);
})