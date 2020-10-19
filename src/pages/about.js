import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, Grid } from "@material-ui/core"
import SocialBar from "../components/SocialBar"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "dave" }, sourceInstanceName: { eq: "images" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 800, maxHeight: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <Grid container spacing={4} alignItems="center">
        <Grid xs={12} md={8}>
          <Typography paragraph>
            My name is David. I'm an Englishman. I was born in the early 80s in
            East England. I am a coding geek, English teacher, hobbyist
            musician, OCD maniac and fan of dogs.
          </Typography>
          <Typography paragraph>
            I now live in Fuerteventura, one of the Canary Islands. I write
            computer code and teach English to earn my keep and volunteer at my
            local dog shelter in my spare time.
          </Typography>
          <Typography paragraph>
            I will probably use this space to share some dog photos and write a
            load of ill-educated, non-sensical and utterly irrelevant bollocks!
            Sounds tempting, right? :D
          </Typography>
          <SocialBar />
        </Grid>
        <Grid item xs={12} md={4}>
          <Img fluid={data.file.childImageSharp.fluid} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About
