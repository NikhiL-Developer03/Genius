const frontRouter = require("express").Router()
const { homePage, aboutPage } = require("../controllers/front")

frontRouter.get("", homePage)
frontRouter.get("/about", aboutPage)

module.exports = frontRouter