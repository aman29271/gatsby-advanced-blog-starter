import React from 'react'
import Helmet from 'react-helmet'
import { graphql,StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
const SEO = ({title, description, image, pathname, article})=>{
    <StaticQuery query={ query }  render={({
        site: {
            siteMetadata:{
                defaultTitle,
                defaultDescription,
                siteUrl,
                defaultImage,
                twitterUsername
            }
        }
    })=>{
        const seo = {
            title: title || defaultTitle,
            description: description || defaultDescription,
            image: `${siteUrl}${image || defaultImage}`,
            url: `${siteUrl}${pathname || '/'}`
        }
        return(
            <>
          <Helmet title={seo.title} >
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        </>
        )
    }

    }>

    </StaticQuery>
}
SEO.PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
    article: PropTypes.bool,
}
SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    pathname: null,
    article: false,
}

export default SEO
const query = graphql`
query{
    site{
        siteMetadata{
            defaultTitle title
            defaultDescription
            siteUrl
            defaultImage
            twitterUsername
        }
    }
}
`
