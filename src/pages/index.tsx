import * as React from "react"

import { Wave } from "../components"
import { Bottom, Intro } from "../sections"
import { Container } from "@mui/material"
import ThemeProvider from "../theme"
import WorkingExperience from "../sections/WorkingExperience"
import Project from "../sections/Project"

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Intro />
      <WorkingExperience />
      <Project/>
      <Bottom />
    </ThemeProvider>
  )
}

export default IndexPage

