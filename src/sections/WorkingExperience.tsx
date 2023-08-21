import { Box, Grid, List, ListItem, Typography, Container } from '@mui/material'
import React from 'react'
import { ExperienceGrid } from '../components'
import { workingExperiences } from '../data/workingExperiences'

const WorkingExperience = () => {
  return (
    <Box
      position={'relative'}
    >
      <Box
        position={'absolute'}
        width={'100%'}
        left={0}
        height={'100%'}
        sx={{
          backgroundColor: 'white',
          zIndex: -1
        }}
      />
      <Container>
        <Typography
          fontSize={'2rem'}
          color={'#465282'}
          fontWeight={900}
          sx={{
            paddingTop: '3rem',
            paddingBottom: '2rem'
          }}
        >
          Working Experience
        </Typography>
        <Grid
          container
          paddingTop={'0.5rem'}
        >
          {
            workingExperiences
              .map(item => <ExperienceGrid {...item} />)
          }
        </Grid>
      </Container>

    </Box >
  )
}

export default WorkingExperience