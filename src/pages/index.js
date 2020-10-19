import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/Logo"
import BlogListing from "../components/BlogListing"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "blogs" }, extension: { eq: "md" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date
                featured_image {
                  childImageSharp {
                    fixed(width: 845) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const blogs = data.allFile.edges.sort((a, b) => {
    return (
      new Date(b.node.childMarkdownRemark.frontmatter.date) -
      new Date(a.node.childMarkdownRemark.frontmatter.date)
    )
  })
  console.log(blogs)
  return (
    <Layout>
      <SEO title="Home" />
      {blogs.map((blog, ind) => (
        <BlogListing blog={blog.node} headline={ind === 0} />
      ))}
    </Layout>
  )
}

export default IndexPage
