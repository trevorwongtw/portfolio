import React from 'react'
import Typography from '@mui/material/Typography';
import {
  Grid,
  Box,
  Container
} from '@mui/material';
import { Wave } from '../components';

const Intro = () => {
  return (
    <Box
      height={'100vh'}
      position={'relative'}
    >
      <Container>
        <Box
          marginTop={'20vh'}
        >
          <Typography
            fontWeight={'600'}
            color={'white'}
            sx={(theme) => ({
              [theme.breakpoints.up('md')]: {
                fontSize: '6rem'
              },
              [theme.breakpoints.up('sm')]: {
                fontSize: '4rem'
              },
              [theme.breakpoints.up('xs')]: {
                fontSize: '3rem'
              },
            })}
          >
            Trevor Wong
          </Typography>
          <Typography
            fontWeight={'400'}
            color={'white'}
            sx={(theme) => ({
              [theme.breakpoints.up('md')]: {
                fontSize: '4rem'
              },
              [theme.breakpoints.up('sm')]: {
                fontSize: '3rem'
              },
              [theme.breakpoints.up('xs')]: {
                fontSize: '2rem'
              },
            })}
          >
            Front End Developer
          </Typography>
        </Box>
      </Container>
      <Box
        // top={'vh'}
        position={'absolute'}
        width={'100%'}
        height={'50%'}
      >
        <Wave />
      </Box>
    </Box>
  )
}

export default Intro
