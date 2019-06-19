module.exports = {
  siteMetadata: {
    title: `GoodAd blog`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `ldcsjhfffdjn`,
        accessToken: `b13bee8f4c1ed42fb98c1244e68d2a257944d5c8dd53503d6dd3dedf4885bbc6`,
      }
    },
    {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: "GTM-NGCXZCV",
      includeInDevelopment: false,
    },
  },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ],
}
