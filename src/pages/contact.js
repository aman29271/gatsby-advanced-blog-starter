import React from 'react'
import {graphql,useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import contactStyle from '../components/modules/contact.module.scss'
import Helmet from 'react-helmet'
import config from '../../data/siteConfig'
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
             <Helmet title={`Contact - ${config.userName}`}/>
         <div>
             <h2 className={contactStyle.title}>Stay in touch</h2>
             <p className={contactStyle.subtitle}>You can contact me via email or find me around the web.</p>
             <ul className={contactStyle.list}>
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