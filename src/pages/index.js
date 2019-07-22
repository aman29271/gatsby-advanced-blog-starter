import React from "react"
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import '../styles/index.scss'
import config from '../../data/siteConfig'
const Indexpage = ()=>{
    return(
    <Layout>
        <Helmet title={config.siteTitle}/>
        <div>
        <h1>Hi, I am Aman</h1>
        <p>I'm web developer specializing in modern javascript. I like to<br/> make things from scratch, contribute to open source,
            and write <br/>about latest development in web technology.

        </p>
        
        </div>
    </Layout>
        )
}

export default Indexpage
