const AdminRouter = require("express").Router()

const { homePage } = require("../../controllers/admin/adminHome")
const EventRouter = require("./events")

AdminRouter.get("", homePage)
AdminRouter.use("/event", EventRouter)

module.exports = AdminRouter