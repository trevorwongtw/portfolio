import { Box, Typography } from '@mui/material'
import React from 'react'
import TechChip from './TechChip'
import { Project } from '../type/Project'

const ProjectGrid = ({ imgSrc, title, content, techs }: Project) => {
  return (
    <Box
      display={'flex'}
      gap={'1rem'}
      flexWrap={'wrap'}
    >
      <img
        src={imgSrc}
        style={{
          aspectRatio: '16/9',
          width: '20rem'
        }}
      />
      <Box>
        <Typography
          color={'#465282'}
          fontSize={'1.25rem'}
          fontWeight={'bold'}
        >{title}</Typography>
        <Typography
          lineHeight={1.4}
          marginTop={'0.5rem'}
          color={'#465282'}
        >
          {content}
        </Typography>
        {techs.map(item => <TechChip item={item} />)}
      </Box>
    </Box>
  )
}

export default ProjectGrid