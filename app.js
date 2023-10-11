require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env["PORT"]
const hostname = process.env["HOST_NAME"]
// define routes
const initRoutes = require('./src/api/routes')
// connect database
require('./src/config/database')

app.use(cors(
    {
        "origin": process.env["CLIENT_URL"],
        "methods": "GET,PUT,POST,DELETE"
    }
))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

app.listen(port, hostname, () => {
    console.log(`App listening on port ${port}`);
});