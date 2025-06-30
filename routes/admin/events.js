const EventRouter = require("express").Router()

const { homePage } = require("../../controllers/admin/adminEvents")

EventRouter.get("", homePage)

module.exports = EventRouter