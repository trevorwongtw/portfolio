import React, { ReactNode } from 'react'
import { Box, Container, Typography } from '@mui/material'

const ContactRow = ({
  icon,
  content
}: {
  icon: ReactNode
  content: ReactNode
}) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      gap={'0.5rem'}
    >
      {icon}
      {content}
    </Box>
  )
}

export default ContactRow