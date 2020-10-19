const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("src/templates/blog.js")

  const blogsQuery = await graphql(`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "blogs" }, extension: { eq: "md" } }
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            childMarkdownRemark {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)
  if (blogsQuery.errors) {
    reporter.panicOnBuild("Error while running blogs query")
    return
  }
  blogsQuery.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: blogTemplate,
      context: { id: node.childMarkdownRemark.id },
    })
  })
}
