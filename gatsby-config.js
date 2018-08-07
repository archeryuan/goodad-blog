module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `73fv4udj8gxu`,
        accessToken: `e282364161b268dca3d0244b70277e6a3123fd684bedebaf78a908c840d81023`,
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ],
}
