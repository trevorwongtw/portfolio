import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { ProjectGrid } from '../components'
import { featuredProjects } from '../data'

const Project = () => {
  return (
    <Box
      paddingBottom={'3rem'}
      sx={{ backgroundColor: 'white' }}
    >
      <Container>
        <Typography
          fontSize={'2rem'}
          color={'#465282'}
          fontWeight={900}
          marginBottom={'2rem'}
        >
          Projects
        </Typography>
        {
          featuredProjects.map(item => <ProjectGrid {...item} />)
        }

      </Container>
    </Box>
  )
}

export default Project