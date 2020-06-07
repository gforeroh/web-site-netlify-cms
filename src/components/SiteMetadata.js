import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            description
            image
            siteUrl
            title
            titleTemplate
            twitterUsername
            url
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
