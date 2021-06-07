module.exports = {
  siteMetadata: {
    title: "Portfolio site",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
};
