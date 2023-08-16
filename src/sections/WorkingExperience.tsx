import { Box, Grid, List, ListItem, Typography, Container } from '@mui/material'
import React from 'react'
import { ExperienceGrid } from '../components'

const WorkingExperience = () => {
  return (
    <Box position={'relative'} >
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
          <ExperienceGrid
            time='Jan 2022 - Mar 2023'
            position='Front End Developer'
            company='Consilience Capital CA Corp.'
            description='Developed an online platform for monitoring construction project lifecycle and assets which generated $10 million in cost savings and reduced field time by 88%.'
            techs={['React', 'TypeScript', 'Redux', 'Redux-saga', 'VueJs', 'VueJs', 'Styled Component']}
          />
          <ExperienceGrid
            time='Aug. 2020 - Dec. 2021'
            position='Software Developer'
            company='Instelar Limited'
            description='Developed an online drawing management system with version controls using ReactJS which significantly reduced the architects’ workloads by 80% and streamlined blueprint design operations.'
            techs={['React', 'TypeScript', 'Redux', 'SwiftUI', 'Kotlin', 'JetPack Compose', 'SCSS']}
          />
          <ExperienceGrid
            time='Jun. 2018 - Jul. 2019'
            position='Junior Mobile Applications Developer'
            company='Accord Apps Development & Marketing Company'
            description='Increased shoe sales by 50% and streamlined online transaction services by developing a mobile app with an attractive user experience and integrated it with an online payment gateway (Stripe).'
            techs={['React Native', 'JavaScript', 'Redux', 'PHP', ]}
          />


        </Grid>
      </Container>

    </Box >
  )
}

export default WorkingExperience