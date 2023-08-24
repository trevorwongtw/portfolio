import * as React from "react"

import { Bottom, Intro } from "../sections"
import ThemeProvider from "../theme"
import WorkingExperience from "../sections/WorkingExperience"
import Project from "../sections/Project"
import Header from "../sections/Header"

const IndexPage = () => {
  return (
    <ThemeProvider>
      {/* <Header /> */}
      <Intro />
      <WorkingExperience />
      <Project/>
      <Bottom />
    </ThemeProvider>
  )
}

export default IndexPage

