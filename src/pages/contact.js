import React, { useState } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { TextField, Grid, Typography, Button } from "@material-ui/core"
import { Send } from "mdi-material-ui"

const Contact = () => {
  const handleChange = e => {
    const { id, value } = e.currentTarget

    setFields({
      ...fields,
      [id]: value,
    })
  }

  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  })
  return (
    <Layout>
      <SEO title="Contact" />
      <Typography variant="h3">Get in touch!</Typography>
      <Typography paragraph>
        Send me love/scorn/indifference by using the form below.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            required
            id="name"
            label="Name"
            onChange={handleChange}
            value={fields.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            required
            type="email"
            id="email"
            label="Email"
            onChange={handleChange}
            value={fields.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            fullWidth
            required
            id="message"
            label="Message"
            onChange={handleChange}
            value={fields.message}
          />
        </Grid>
        <Grid item xs={2} md={4} />
        <Grid item xs={8} md={4}>
          <Button endIcon={<Send />} fullWidth>
            Send
          </Button>
        </Grid>
        <Grid item xs={2} md={4} />
      </Grid>
    </Layout>
  )
}

export default Contact
