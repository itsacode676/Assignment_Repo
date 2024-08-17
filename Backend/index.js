// All Routes
const CardRoutes = require('./Routes/CardRoutes')

// Configurations 
require("dotenv").config()
const { dbConnection } = require("./Config/Database")
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

// Creating express app
const app = express()

// Middlewares
app.use(bodyParser.json());
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// Mounting 
app.use("/api/v1/card", CardRoutes)

dbConnection();
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})

app.get('/', (req, res) => {
    res.send("<h1>App started sucessfully</h1>")
})

