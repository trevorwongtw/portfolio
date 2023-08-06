import React from 'react'
import Typography from '@mui/material/Typography';
import {
  Grid,
  Box
} from '@mui/material';
import { Wave } from '../components';

const Intro = () => {
  return (
    <Box
      height={'100vh'}
      display={'flex'}
    >
      <Box
        marginTop={'20vh'}
      >
        <Typography variant='h1' >
          Trevor Wong
        </Typography>
        <Typography variant='h2'>
          Front End Developer
        </Typography>
      </Box>
    </Box>
  )
}

export default Intro
