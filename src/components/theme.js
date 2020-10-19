import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import config from "../../gatsby-config"

const theme = createMuiTheme({
  typography: {
    fontFamily: config.siteMetadata.font,
  },
  props: {
    MuiButton: {
      variant: "outlined",
    },
  },
  overrides: {
    MuiAppBar: {
      colorTransparent: {
        boxShadow: "none",
      },
    },
  },
})
export default responsiveFontSizes(theme)
