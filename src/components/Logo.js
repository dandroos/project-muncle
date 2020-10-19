import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ circle = null }) => {
  const data = useStaticQuery(graphql`
    {
      nav: file(name: { eq: "nav-logo" }) {
        childImageSharp {
          fluid(maxHeight: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      circle: file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return circle ? (
    <Img fluid={data.circle.childImageSharp.fluid} />
  ) : (
    <Img fluid={data.nav.childImageSharp.fluid} />
  )
}

export default Logo
