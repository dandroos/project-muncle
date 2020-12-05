import React from "react"
import social from "../social"
import { Box, Typography, Grid, Button } from "@material-ui/core"

const SocialBar = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {social.map(i => {
          return (
            <Grid item xs={12} md={4}>
              <Button startIcon={<i.icon />} fullWidth>
                I'm on {i.label}!
              </Button>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default SocialBar
