import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Chip
} from '@mui/material'

const ExperienceGrid = ({
  time,
  position,
  company,
  description,
  techs
}: {
  time: string
  position: string
  company: string
  description: string
  techs: string[]
}) => {
  return (
    <>
      <Grid xs={12} md={3}>
        <Typography
          variant={'body1'}
          fontSize={'1rem'}
          color={'#1f2643'}
        >
          {time}
        </Typography>
      </Grid>
      <Grid xs={12} md={9} marginBottom={'3rem'}>
        <Typography
          fontSize={'1.25rem'}
          color={'#465282'}
          fontWeight={'bold'}
        >
          {position}．
          <Box display={'inline-block'}>
            <Typography
              color={'#465282'}
              fontSize={'1.25rem'}
              fontWeight={'bold'}
            >{company}</Typography>
          </Box>
        </Typography>
        <Typography
          color={'#465282'}
          lineHeight={1.4}
          fontSize={'1rem'}
          marginTop={'0.5rem'}
        >
          {description}
        </Typography>
        {
          techs.map(item => <Chip
            sx={{
              marginTop: '0.5rem',
              marginRight: '0.5rem'
            }}
            label={item}
            variant="outlined"
            color='primary'
          />)
        }
      </Grid>
    </>
  )
}

export default ExperienceGrid