import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Bottom = () => {
  return (
    <Box
      paddingTop={'3rem'}
      paddingBottom={'2rem'}
      position={'relative'}
      // sx={{ backgroundColor: 'white' }}
    >
      <Container>
        <Box>
          <Typography
            fontSize={'2rem'}
            color={'#465282'}
            fontWeight={900}
          >
            Contact
          </Typography>
        </Box>
      </Container>
      <Box
        position={'absolute'}
        width={'95%'}
        height={'110%'}
        top={'-10%'}
        right={'0'}
        sx={{
          backgroundColor: '#81d2c7',
          zIndex: '-1'
        }}
      />
    </Box>
  )
}

export default Bottom