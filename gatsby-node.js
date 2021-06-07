exports.createPages = async ({actions, graphql}) => {
  const { data } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              name
            }
          }
        }
      }
    }    
  `)

  data.allMarkdownRemark.edges.map(({node}) => {
    const { name } = node.frontmatter;

    actions.createPage({
      path : `/projects/${name}`,
      component : require.resolve("./src/templates/project.jsx"),
      context : {
        name : name
      }
    })
  })
}