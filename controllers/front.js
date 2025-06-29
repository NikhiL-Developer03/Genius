const { model } = require("mongoose")

function homePage(req, res) {
  res.render("index", {
    title: "Home"
  })
}
function aboutPage(req, res) {
  res.render("aboutPage", {
    title: "About Us",
  })
}
function featurePage(req, res) {
  res.render("featurePage", {
    title: "Feature",
  })
}
function departmentPage(req, res) {
  res.render("departmentPage", {
    title: "Department",
  })
}
function teamPage(req, res) {
  res.render("teamPage", {
    title: "Team",
  })
}
function testimonialPage(req, res) {
  res.render("testimonialPage", {
    title: "Testimonail",
  })
}
function contactUsPage(req, res) {
  res.render("contactUsPage", {
    title: "Contact-Us",
  })
}
function enquiryPage(req, res) {
  res.render("enquiryPage", {
    title: "Enquiry",
  })
}
function galleryPage(req, res) {
  res.render("galleryPage", {
    title: "Gallery",
  })
}
function faqPage(req, res) {
  res.render("faqPage", {
    title: "FAQ",
  })
}
function eventPage(req, res) {
  res.render("eventPage", {
    title: "Events",
  })
}

module.exports = {
  homePage: homePage,
  aboutPage: aboutPage,
  featurePage: featurePage,
  departmentPage: departmentPage,
  teamPage: teamPage,
  testimonialPage: testimonialPage,
  contactUsPage: contactUsPage,
  enquiryPage: enquiryPage,
  galleryPage: galleryPage,
  faqPage: faqPage,
  eventPage: eventPage,
}