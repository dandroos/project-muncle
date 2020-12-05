import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { connect } from "react-redux"
import {
  AppBar,
  Toolbar,
  ThemeProvider,
  CssBaseline,
  Box,
  Button,
  IconButton,
  Container,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { Menu } from "mdi-material-ui"
import theme from "./theme"
import { Helmet } from "react-helmet"
import config from "../../gatsby-config"
import MobileNav from "./MobileNav"
import Logo from "./Logo"

import nav from "../nav"

import { setMobileMenu } from "../state/actions"

const Layout = ({ children, dispatch }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const handleClick = e => {
    const { id } = e.currentTarget
    switch (id) {
      case "close-menu":
        dispatch(setMobileMenu(true))
        break
      default:
        break
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <link
          href={`https://fonts.googleapis.com/css2?family=${config.siteMetadata.font}&display=swap`}
          rel="stylesheet"
        />
      </Helmet>
      <MobileNav />
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Box my={1} width="65%" maxWidth={500}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              variantMapping={{ h4: "h1", h3: "h1" }}
              style={{
                textTransform: "uppercase",
                fontWeight: 800,
                letterSpacing: 4,
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              {data.site.siteMetadata.title}
            </Typography>
          </Box>
          <Box flexGrow={1} />
          {isMobile ? (
            <IconButton edge="end" onClick={handleClick} id="close-menu">
              <Menu />
            </IconButton>
          ) : (
            nav.map((link, ind) => (
              <Button
                variant="text"
                size="large"
                style={{ marginRight: ind === nav.length - 1 ? 0 : "2rem" }}
                onClick={() => navigate(link.link)}
              >
                {link.label}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box my={3} />
        {children}
      </Container>
    </ThemeProvider>
  )
}

export default connect()(Layout)
