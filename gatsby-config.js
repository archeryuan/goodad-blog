module.exports = {
  siteMetadata: {
    title: `GoodBlog - Result Oriented Marketing Tips for SME`,
    description: `Result Oriented Marketing for Google Ads set in 3 min. Auto Ads/Keywords suggestion and optimization by AI. Advertise now!`,
    author: `@GoodProd`,
    siteUrl: `https://blog.goodad.co`,
  },
  plugins: [{
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
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ],
}
