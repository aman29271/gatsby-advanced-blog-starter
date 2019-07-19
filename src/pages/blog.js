import React from 'react'
import Layout from '../components/layout'
import {graphql,useStaticQuery,Link} from 'gatsby'
import blogStyles from '../components/blog.module.scss'
const BlogPage = () =>{
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        title,date
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
        <div>
            <h1>Blog</h1>
            <p>Post will appear Here later on.</p>
            <ul className={blogStyles.posts}>
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
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