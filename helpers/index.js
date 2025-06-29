const hbs = require("hbs")

hbs.registerHelper("siteName", () => {
  return process.env.SITE_NAME
})
hbs.registerHelper("siteEmail", () => {
  return process.env.SITE_EMAIL
})
hbs.registerHelper("sitePhone", () => {
  return process.env.SITE_PHONE
})
hbs.registerHelper("siteWhatsApp", () => {
  return process.env.SITE_WHATSAPP
})
hbs.registerHelper("siteAddress", () => {
  return process.env.SITE_ADDRESS
})
hbs.registerHelper("siteMap1", () => {
  return process.env.SITE_GOOGLE_MAP1
})
hbs.registerHelper("siteMap2", () => {
  return process.env.SITE_GOOGLE_MAP2
})
hbs.registerHelper("siteFacebook", () => {
  return process.env.SITE_FACEBOOK
})
hbs.registerHelper("siteYoutube", () => {
  return process.env.SITE_YOUTUBE
})
hbs.registerHelper("siteInstagram", () => {
  return process.env.SITE_INSTAGRAM 
})
hbs.registerHelper("siteLinkedin", () => {
  return process.env.SITE_LINKEDIN
})