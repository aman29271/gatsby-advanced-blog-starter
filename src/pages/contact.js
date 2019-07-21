import React from 'react'
import {graphql,useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
 const Contact = ()=>{
     const data = useStaticQuery(graphql`
     query{
         site{
             siteMetadata{
                 Email,Github,Twitter,LinkedIn
             }
         }
     }
     `)
     return(
         <Layout>
         <div>
             <h2>Stay in touch</h2>
             <p>You can contact me via email or find me around the web.</p>
             <ul>
                 <li>Email: <a href={`mailto:${data.site.siteMetadata.Email}`}>{data.site.siteMetadata.Email}</a></li>
                 <li>Github: <a href={`https://github.com/${data.site.siteMetadata.Github}`}>{data.site.siteMetadata.Github}</a></li>
                 <li>Twitter: <a href={`https://twitter.com/${data.site.siteMetadata.Twitter}`}>{data.site.siteMetadata.Twitter}</a></li>
                 <li>LinkedIn: <a href={`https://linkedin.com/in/${data.site.siteMetadata.LinkedIn}`}>{data.site.siteMetadata.LinkedIn}</a></li>
            </ul>
         </div>
         </Layout>
     )
 }
 export default Contact