exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.map(({ node }) => {
    const { title } = node.frontmatter;

    actions.createPage({
      path: `/projects/${title}`,
      component: require.resolve("./src/templates/project.jsx"),
      context: {
        title: title,
      },
    });
  });
};
