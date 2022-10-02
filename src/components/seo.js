import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  
  `)
  const siteTitle = data.site.siteMetadata.title
  return (
    <title>{title} | {siteTitle}</title>
  )
}

export default Seo