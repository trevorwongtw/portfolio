import * as React from "react"

import { Wave } from "../components"
import { Bottom, Intro } from "../sections"
import { Container } from "@mui/material"
import ThemeProvider from "../theme"
import WorkingExperience from "../sections/WorkingExperience"

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Intro />
      <WorkingExperience />
      <Bottom />
    </ThemeProvider>
  )
}

export default IndexPage

