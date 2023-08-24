import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as MailIcon } from 'src/icons/mail.svg'
import { ReactComponent as GitIcon } from 'src/icons/git.svg'
import { ContactRow } from 'src/components'

const Bottom = () => {
  return (
    <Box
      marginTop={'2rem'}
      paddingBottom={'4rem'}
      position={'relative'}
      sx={{ backgroundColor: '#465282' }}
    >
      <Box
        position={'absolute'}
        width={'calc(100% - 2rem)'}
        height={'calc(100% + 2rem)'}
        top={'-2rem'}
        right={'0'}
        sx={{
          backgroundColor: '#81d2c7',
          zIndex: '1'
        }}
      />
      <Container>
        <Box
          marginLeft={'2rem'}
          position={'relative'}
          sx={{ zIndex: '3' }}
        >
          <Typography
            fontSize={'2rem'}
            color={'#465282'}
            fontWeight={900}
          >
            Contact
          </Typography>
          <ContactRow
            icon={<MailIcon style={{ width: '2rem', height: '2rem' }} />}
            content={<Typography color={'#465282'}>
              yufungtrevor.wong@gmail.com
            </Typography>}
          />
          <ContactRow
            icon={<GitIcon style={{ width: '2rem', height: '2rem' }} />}
            content={
              <a href='https://github.com/trevorwongtw'>
                https://github.com/trevorwongtw
              </a>
            }
          />
        </Box>
      </Container>

    </Box>
  )
}

export default Bottom