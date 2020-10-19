import React from "react"
import { Link, navigate } from "gatsby"
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import moment from "moment"

const BlogListing = ({ blog, headline }) => {
  const { frontmatter, excerpt, fields } = blog.childMarkdownRemark
  const { title, featured_image, date } = frontmatter
  const { slug } = fields
  const isMobile = useMediaQuery(useTheme().breakpoints.down("xs"))

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={headline ? 12 : 6}>
        <Card elevation={4}>
          <CardActionArea onClick={() => navigate(slug)}>
            <CardMedia
              style={{ height: headline ? (isMobile ? 500 : 600) : 400 }}
              image={featured_image.childImageSharp.fixed.src}
            />
            <CardContent>
              <Typography variant={headline ? "h2" : "h3"}>{title}</Typography>
              <Typography
                display="block"
                variant="caption"
                color="textSecondary"
                paragraph
              >
                {moment(date).format("dddd Do MMMM YYYY")}
              </Typography>
              <Typography>{excerpt}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button color="primary" to={slug} component={Link}>
              Read more
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default BlogListing
