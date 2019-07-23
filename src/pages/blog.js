import React from 'react'
import Layout from '../components/layout'
import {graphql,useStaticQuery,Link} from 'gatsby'
import blogStyles from '../components/modules/posts.module.scss'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import config from '../../data/siteConfig'
const BlogPage = () =>{
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit:1000
        ){
            edges{
                node{
                    id,
                    ...FrontmatterFragmentBlog,
                    fields{
                        slug
                    }
                }
            }
        }
    }
    `)
    const {edges} = data.allMarkdownRemark
    // console.log(edges)
    return(
        <Layout>
            <Helmet title={`Articles - ${config.userName}`}/>
        <div>
            <h2>Articles</h2>
            {/* <p>Post will appear Here later on.</p> */}
            <ul className={blogStyles.posts}>
            {edges.map(({node}) => {
                const { id,frontmatter,fields} = node
                const {title,date,thumbnail} = frontmatter
                const {slug} = fields
                return (
                    <li className={blogStyles.post} key={id}>
                        <Link to={`/blog/${slug}`} className={blogStyles.content_wrapper}>
                            { thumbnail ? <Img fixed={thumbnail.childImageSharp.fixed}/> : null}
                            <div className={blogStyles.content}>
                            <h3>{title}</h3>
                        <p><span className={blogStyles.date}>{date}</span></p>
                            </div>
                        </Link>
                    </li>
                )
            })}
            </ul>
        </div>
        </Layout>
    )
}
export default BlogPage