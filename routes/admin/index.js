const AdminRouter = require("express").Router()

const { homePage } = require("../../controllers/admin/adminHome")

AdminRouter.get("", homePage)

module.exports = AdminRouter