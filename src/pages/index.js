import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import '../styles/index.scss'
const Indexpage = ()=>{
    return(
    <Layout>
        <div>
        <h1>Hello.</h1>
        <h2>I am Aman, A Frontend Developer </h2>
        <p>Need a developer <Link to = "/contact">Contact Me</Link>.</p>
        </div>
    </Layout>
        )
}

export default Indexpage
