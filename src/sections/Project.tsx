import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { ProjectGrid } from '../components'
import { featuredProjects } from '../data'
import { Link } from 'gatsby'
import { ReactComponent as VectorIcon } from 'src/icons/vector.svg'

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
        <Link
          to="/projects/"
          style={{ textDecoration: 'none' }}
        >
          <Box
            display={'flex'}
            gap={'0.5rem'}
            alignItems={'center'}
          >
            <Typography > This is a link </Typography>
            <VectorIcon fill={'#465282'} width={'1rem'} height={'1rem'} />
          </Box>
        </Link>
      </Container>
    </Box>
  )
}

export default Project