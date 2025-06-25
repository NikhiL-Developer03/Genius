const { model } = require("mongoose")

function homePage(req, res) {
  res.render("index")
}
function aboutPage(req, res) {
  res.render("aboutPage")
}

module.exports = {
  homePage: homePage,
  aboutPage: aboutPage,
}