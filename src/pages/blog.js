import React from 'react'
import Layout from '../components/layout'
import {graphql,useStaticQuery,Link} from 'gatsby'
import blogStyles from '../components/modules/blog.module.scss'
import Helmet from 'react-helmet'
import config from '../../data/siteConfig'
const BlogPage = () =>{
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
            edges{
                node{
                    id,
                    frontmatter{
                        title,date(formatString:"dddd, Mo MMMM YYYY"),tags
                    },
                    fields{
                        slug
                    }
                }
            }
        }
    }
    `)
    // console.log(data);
    return(
        <Layout>
            <Helmet title={`Articles - ${config.userName}`}/>
        <div>
            <h2>Articles</h2>
            {/* <p>Post will appear Here later on.</p> */}
            <ul className={blogStyles.posts}>
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <li className={blogStyles.post} key={edge.node.id}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                        <h3>{edge.node.frontmatter.title}</h3>
                        <p><span>{edge.node.frontmatter.date}</span></p>
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