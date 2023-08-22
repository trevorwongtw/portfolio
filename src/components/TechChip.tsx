import React from 'react'
import {
  Chip
} from '@mui/material'

const TechChip = ({item}:{item: string}) => {
  return (
    <Chip
      sx={{
        marginTop: '0.5rem',
        marginRight: '0.5rem'
      }}
      label={item}
      variant="outlined"
      color='primary'
    />
  )
}

export default TechChip