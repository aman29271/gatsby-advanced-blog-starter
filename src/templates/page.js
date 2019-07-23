import React from 'react'
import Layout from '../components/layout'
import {graphql,Link} from 'gatsby'
import postStyles from '../components/modules/post.module.scss'
import Helmet from 'react-helmet'
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
            title date(formatString:"ddd, Do MMMM YYYY") tags
            },html
            
        }
        }
`
const Blog=(props)=>{
    const { frontmatter, html} = props.data.markdownRemark
    const { title,date,tags} = frontmatter
    return(
        <Layout>
            <Helmet title={title}/>
            <h1>{title}</h1>
            <p><span className={postStyles.date}>{date}</span>
            {tags.map((tag,index)=>{
                return(
                    <Link to={`/tags/${tag}`} key={index}><span className={postStyles.tag}>{tag}</span></Link>
                )
            })}</p>
            <div dangerouslySetInnerHTML={{__html:html}}></div>
        </Layout>
    )
}
export default Blog