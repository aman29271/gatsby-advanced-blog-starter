import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import blogstyles from '../components/modules/posts.module.scss'
import { Link,graphql } from 'gatsby'
import Img from 'gatsby-image'

const tagPage = ({data,pageContext})=>{
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} Post${
        totalCount === 1 ? "" : "s"
      } tagged with `
return(
    <Layout>
        <Helmet title={tagHeader}></Helmet>
        <h2 className={blogstyles.title}>{tagHeader}<u>{`${tag}`}</u></h2>
        <ul className={blogstyles.posts}>
            {edges.map(({node}) => {
                const {frontmatter,fields,id} = node
                const { title,date,thumbnail} = frontmatter
                const { slug } = fields
                return(
                    <li key={id} className={blogstyles.post}>
                        <Link className={blogstyles.content_wrapper} to ={`/blog/${slug}`} >
                        { thumbnail ? <Img fixed={thumbnail.childImageSharp.fixed}/> : null}
                        <div className={blogstyles.content}>
                        <h3>{title}</h3>
                        <p><span className={blogstyles.date}>{date}</span></p>
                        </div>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </Layout>
)
}
export default tagPage
export const query = graphql`
query($tag : String){
    allMarkdownRemark(
        limit: 2000
        sort:{fields: [frontmatter___date], order: DESC }
        filter:{ frontmatter:{ tags: { in: [$tag] } } }
    ){
        totalCount
        edges{
            node{
                id,
                fields{
                    slug
                }
                ,
                ...FrontmatterFragmentBlog
            }
        }
    }
}
`
export const frontmatterfragment = graphql`
fragment FrontmatterFragmentBlog on MarkdownRemark{
    frontmatter{
        title
        date(formatString:"ddd, Do MMMM YYYY")
        tags
        thumbnail{
            childImageSharp{
                fixed(height:150 , width:150){
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
}
`