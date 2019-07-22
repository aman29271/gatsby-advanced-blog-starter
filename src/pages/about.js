import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import config from '../../data/siteConfig'
const Aboutpage = () =>{
    return(
        <Layout>
            <Helmet title={`Me - ${config.userName}`}/>
        <div>
            <h2>About me</h2>
            <p>Hi ! I am Aman Kumar. A 3rd Year B.tech Student at IIT Patna.</p>
            <p>Pursuing Civil Engineering and a web enthusiast</p>
        </div>
        </Layout>
        
    )
}
export default Aboutpage