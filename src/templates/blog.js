import React from 'react'
import Layout from '../components/layout'
import {graphql,Link} from 'gatsby'
export const query = graphql`
        query(
            $slug: String
        ){
        markdownRemark (
            fields:{
            slug:{
                eq: $slug
            }
            }
        ){
            frontmatter{
            title date tags
            },html
            
        }
        }
`
const Blog=(props)=>{
    const { frontmatter, html} = props.data.markdownRemark
    const { title,date,tags} = frontmatter
    return(
        <Layout>
            <h1>{title}</h1>
            <p>{date}<Link to={`/tags/${tags}`}>{tags}</Link></p>
            <div dangerouslySetInnerHTML={{__html:html}}></div>
        </Layout>
    )
}
export default Blog