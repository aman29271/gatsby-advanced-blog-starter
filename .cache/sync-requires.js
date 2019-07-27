const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": hot(preferDefault(require("/home/phoenix/Desktop/gatsby-bootcamp-project/src/templates/page.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/home/phoenix/Desktop/gatsby-bootcamp-project/src/templates/tags.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/phoenix/Desktop/gatsby-bootcamp-project/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/phoenix/Desktop/gatsby-bootcamp-project/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/phoenix/Desktop/gatsby-bootcamp-project/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/phoenix/Desktop/gatsby-bootcamp-project/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/phoenix/Desktop/gatsby-bootcamp-project/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/phoenix/Desktop/gatsby-bootcamp-project/src/pages/index.js")))
}

