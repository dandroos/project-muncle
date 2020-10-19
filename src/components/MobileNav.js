import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { connect } from "react-redux"
import {
  Dialog,
  DialogContent,
  DialogContentText,
  Box,
  List,
  ListItem,
  ListItemText,
  Fab,
  Typography,
  Container,
} from "@material-ui/core"
import { Close } from "mdi-material-ui"
import nav from "../nav"
import { setMobileMenu } from "../state/actions"

const MobileNav = ({ dispatch, isOpen }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const handleClose = () => {
    dispatch(setMobileMenu(false))
  }

  return (
    <Dialog open={isOpen} onClose={handleClose} fullScreen>
      <Container>
        <Box
          minHeight="100vh"
          align="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2">
            {data.site.siteMetadata.title.toUpperCase()}
          </Typography>
          <Typography paragraph style={{ marginTop: "1rem" }}>
            {data.site.siteMetadata.description}
          </Typography>
          <Box mt={3}>
            <List>
              {nav.map((link, ind) => (
                <ListItem
                  button
                  divider={ind === nav.length - 1 ? false : true}
                  style={{ paddingTop: ".75rem", paddingBottom: ".75rem" }}
                  onClick={() => {
                    navigate(link.link)
                    handleClose()
                  }}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      display: "block",
                      align: "center",
                    }}
                    primary={link.label.toUpperCase()}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
      <Fab
        onClick={handleClose}
        style={{ position: "fixed", top: 10, right: 10 }}
        color="primary"
      >
        <Close />
      </Fab>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  isOpen: state.mobileMenu,
})

export default connect(mapStateToProps)(MobileNav)
