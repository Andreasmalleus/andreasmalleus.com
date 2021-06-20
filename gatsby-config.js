module.exports = {
  siteMetadata: {
    title: "Andreas Malleus Portfolio",
    description: "A personal portfolio",
    url: "https://andreasmalleus.com",
    twitterUsername: "@sourcedub",
    image: "/default.png",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://andreasmalleus.com",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
