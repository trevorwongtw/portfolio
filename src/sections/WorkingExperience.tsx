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
        sx={{ backgroundColor: 'white' }}
      >
      </Box>
      <Container>
        <Typography >Working Experience</Typography>
        <Grid
          container
          paddingTop={'0.5rem'}
        >
          <Grid xs={12} md={3}>
            <Typography>
              Jan 2022 - Mar 2023
            </Typography>
          </Grid>
          <Grid xs={12} md={9}>
            <Typography>Consilience Capital CA Corp.</Typography>
            <Typography>
              Front End Developer
            </Typography>
            <List>
              <ListItem>
                <Typography>
                  Developed an online platform for monitoring construction project lifecycle and assets which generated $10 million in cost savings and reduced field time by 88%.
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={12} md={3}>
            <Typography>
              Aug 2020 – Dec 2021
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
              Jun. 2018 – Jul. 2019
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