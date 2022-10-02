module.exports = {
  siteMetadata: {
    title: `HFH`,
    description: `HFH Management Solutions.`,
    author: `@hatem.maalej`,
    siteUrl: `https://gatsbytestmain21189.gatsbyjs.io/`,
    image: `/gatsby-icon.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
}