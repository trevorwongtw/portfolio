import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import TechChip from './TechChip'
import { FeaturedProject } from '../type/Project'

const ProjectGrid = ({ imgSrc, title, content, techs, link }: FeaturedProject) => {
  return (
    <Box
      display={'flex'}
      paddingBottom={'3rem'}
      gap={'2rem'}
      flexWrap={'wrap'}
    >
      <Box 
        flexBasis={'20rem'}
        // flexGrow={1}
      >
        <img
          src={imgSrc}
          style={{
            aspectRatio: '16/9',
            width: '20rem',
            objectFit: 'cover'
          }}
        />
      </Box>
      <Box
        flexBasis={'30rem'}
        flexGrow={1}
      >
        <a
          href={link}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <Typography
            color={'#465282'}
            fontSize={'1.25rem'}
            fontWeight={'bold'}
          >{title}</Typography>
        </a>
        <Typography
          lineHeight={1.5}
          marginTop={'0.5rem'}
          color={'#465282'}
          sx={{ textOverflow: 'wrap' }}
        >
          {content}
        </Typography>
        {techs.map(item => <TechChip item={item} />)}
      </Box>
    </Box>
  )
}

export default ProjectGrid