import { Box, Typography } from '@mui/material'
import React from 'react'
// import ngoWebsite from 'src/images/ngoWebsite.png'

const ProjectGrid = ({ imgSrc, title }: {
  imgSrc: string,
  title: string
}) => {
  return (
    <Box>
      <img
        src={imgSrc}
        style={{
          aspectRatio: '16/9',
          width: '20rem'
        }}
      />
      <Typography
        color={'#465282'}
        fontSize={'1.25rem'}
        fontWeight={'bold'}
      >{title}</Typography>
    </Box>
  )
}

export default ProjectGrid