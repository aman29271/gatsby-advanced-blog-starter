import React from "react"
import {graphql,useStaticQuery} from 'gatsby'
const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
    return(
        <div>Created by {data.site.siteMetadata.author} &copy; 2019    </div>
    )
}
export default Footer