import React from 'react'
import { projects } from '../data'
import { TechChip } from '../components'
import {
  Box,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Container,
  Typography
} from '@mui/material'
//@ts-ignore
import { ReactComponent as VectorIcon } from 'src/icons/vector.svg'
import { Link } from 'gatsby'

const Projects = () => {
  return (
    <Box
      paddingTop={'3rem'}
      paddingBottom={'3rem'}
    >
      <Container>
        <Link
          to={'/'}
          style={{ textDecoration: 'none' }}
        >
          <Box
            display={'flex'}
            gap={'0.5rem'}
            alignItems={'flex-start'}
          >
            <Box sx={{ transform: 'rotate(180deg)' }}>
              <VectorIcon
                fill={'#465282'}
                width={'1rem'}
                height={'1rem'}
              />
            </Box>
            <Typography
              color={'#465282'}
              sx={{ userSelect: 'none' }}
            >
              back
            </Typography>
          </Box>
        </Link>
        <Typography
          color={'#465282'}
          fontSize={'3rem'}
          fontWeight={'bold'}
          marginBottom={'1rem'}
        >
          All Projects
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell align="left">Project Name</TableCell>
              <TableCell align="left">Made at</TableCell>
              <TableCell align="left">Built With</TableCell>
              <TableCell align="left">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              projects.map(item => <TableRow
                key={'name'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{item.year}</TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.company}</TableCell>
                <TableCell align="left">
                  {
                    item.techs.map(tech => <TechChip item={tech} />)
                  }
                </TableCell>
                <TableCell align="left">
                  {
                    item.linkObj &&
                    <a href={item.linkObj.url}>
                      {item.linkObj.display}
                    </a>
                  }
                </TableCell>
              </TableRow>)
            }
          </TableBody>
        </Table>
      </Container>
    </Box>
  )
}

export default Projects;