module.exports = {
  siteMetadata: {
    title: `HFH`,
    description: `HFH Management Solutions.`,
    author: `@hatem.maalej`,
    siteUrl: `https://gatsbytestmain21189.gatsbyjs.io/`,
    image: `/gatsby-icon.png`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}