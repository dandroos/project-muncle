import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { CommentCount, DiscussionEmbed } from "disqus-react"
import Img from "gatsby-image"
import moment from "moment"
import Layout from "../components/layout"
import { Box, Button, Typography } from "@material-ui/core"
import { ChevronLeft, Comment } from "mdi-material-ui"

const Blog = props => {
  const { title, featured_image, date } = props.data.article.frontmatter
  const { html, fields, id } = props.data.article
  const { slug } = fields

  const [showComments, setShowComments] = useState(false)

  const disqusConfig = {
    url: `http://muncleblog${slug}`,
    title,
    identifier: id,
  }

  return (
    <Layout>
      <Button size="small" component={Link} startIcon={<ChevronLeft />} to="/">
        Back
      </Button>
      <Box my={3}>
        <Typography variant="h2">{title}</Typography>
        <Typography display="block" variant="caption" color="textSecondary">
          {moment(date).format("dddd Do MMMM YYYY")}
        </Typography>
        <Img fluid={featured_image.childImageSharp.fluid} />
        <Typography
          component="div"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Button
          fullWidth
          startIcon={<Comment />}
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? "Hide comments" : "Show comments"} (
          <CommentCount shortname="muncleblog" config={disqusConfig}>
            0 comments
          </CommentCount>
          )
        </Button>
        {showComments && (
          <DiscussionEmbed shortname="muncleblog" config={disqusConfig} />
        )}
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    article: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        date
        featured_image {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
      html
    }
  }
`
export default Blog
