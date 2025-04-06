const express = require('express')
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5172;

app.listen(port, () => {
    console.log(`Server Listerning On Port ${port}`);
}
);
