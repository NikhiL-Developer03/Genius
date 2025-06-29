const express = require('express')
const path = require("path")
const app = express()
require("dotenv").config()
require("./helpers/index")

app.set("view engine", "hbs")
app.use(express.static(path.join(__dirname, "views/public")))

// Register partial to divide the code into parts and also set path
const hbs = require("hbs")
hbs.registerPartials(path.join(__dirname, "views/partials"))

const Router = require("./routes/index")

app.use("", Router)

let port = process.env.PORT || 8000
app.listen(
  port, console.log(`Server is Running at http://localhost:${port}`)
)