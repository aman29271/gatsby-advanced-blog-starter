/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require('./data/siteConfig')
module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:config.siteTitle,
    author:config.userName,
    Email:config.userEmail,
    Github: 'aman29271',
    Twitter:'Aman1291aman',
    LinkedIn:'aman29271'
  },
  plugins:[
    'gatsby-plugin-sass',{
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`posts`,
        path:`${__dirname}/src/posts`
      }
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      }},'gatsby-plugin-sharp',{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },'gatsby-plugin-draft',{
      resolve:`gatsby-transformer-remark`,
      options:{
        plugins:[
          'gatsby-remark-relative-images','gatsby-remark-prismjs',"gatsby-remark-copy-linked-files",
          {
            resolve:`gatsby-remark-images`,
            options:{
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
