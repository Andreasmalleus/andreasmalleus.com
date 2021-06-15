module.exports = {
  siteMetadata: {
    title: "Andreas Malleus Portfolio",
    description: "A personal portfolio",
    url: "https://andreasmalleus.com",
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
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 500,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
