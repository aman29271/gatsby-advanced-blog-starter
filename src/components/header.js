import React from "react"
import { Link,graphql,useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'
const Header = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title,author
            }
        }
    }
    `);
    return(
        <div className={headerStyles.container}>
            <h1><Link to="/" className={headerStyles.title}>{data.site.siteMetadata.author}</Link></h1>
        <header>
            <ul className={headerStyles.list}>
                <li><Link to="/" activeClassName={headerStyles.active_nav_list}>Home</Link></li>
                <li><Link to="/about" activeClassName={headerStyles.active_nav_list}>About</Link></li>
                <li><Link to ="/blog" activeClassName={headerStyles.active_nav_list}>Blog</Link></li>
                <li><Link to = "/contact" activeClassName={headerStyles.active_nav_list}>Contact</Link></li>
            </ul>
        </header>
        </div>
    )
}
export default Header