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
  Container
} from '@mui/material'


const Projects = () => {
  return (
    <Box>
      <Container>
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
                    item.linkObj?.diaplay &&
                    item.linkObj?.url &&
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