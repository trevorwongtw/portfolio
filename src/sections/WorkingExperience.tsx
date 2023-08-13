import { Box, Grid, List, ListItem, Typography, Container } from '@mui/material'
import React from 'react'

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
        <Typography >Working Experience</Typography>
        <Grid
          container
          paddingTop={'0.5rem'}
        >
          <Grid xs={12} md={3}>

            <Typography variant={'body1'} >
              2022 - 2023
            </Typography>
          </Grid>
          <Grid xs={12} md={9}>

            <Typography variant='h3'>
              Front End Developer
              <Box sx={{ display: 'inline-block' }}>
                <Typography variant='h3'>．Consilience Capital CA Corp.</Typography>
              </Box>
            </Typography>
          </Grid>
          <Grid xs={12} md={3}>
            <Typography>
              2020 - 2021
            </Typography>
          </Grid>
          <Grid xs={12} md={9}>
            <Typography>Instelar Limited</Typography>
            <Typography>
              Software Developer
            </Typography>
            <List>
              <ListItem>
                <Typography>
                  Developed an online drawing management system with version controls using ReactJS which significantly reduced the architects’ workloads by 80% and streamlined blueprint design operations.
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={12} md={3}>
            <Typography>
              2018 - 2019
            </Typography>
          </Grid>
          <Grid xs={12} md={9}>
            <Typography>Accord Apps Development & Marketing Company</Typography>
            <Typography>
              Junior Mobile Applications Developer
            </Typography>
            <List>
              <ListItem>
                <Typography>
                  Developed an online drawing management system with version controls using ReactJS which significantly reduced the architects’ workloads by 80% and streamlined blueprint design operations.
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>

    </Box >
  )
}

export default WorkingExperience