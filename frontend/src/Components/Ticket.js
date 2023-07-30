import React, { useState,useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import { ButtonGroup, TableSortLabel } from '@mui/material';
import axios from 'axios';

export default function Ticket() {
  
  const [tickets, settickets] = useState([]);
  const [status, setUpdatestatus] = useState(["ASC"]);
  useEffect(() => {
    axios.get("http://localhost:8081/")
      .then(  
        (result) => {
          settickets(result.data);
        })
  }, [])
  const sorting =(col) =>{
    if (status === "ASC"){
      const sorted =[...tickets].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      settickets(sorted);
      setUpdatestatus("DSC");
    } 
    if (status === "DSC"){
      const sorted =[...tickets].sort((a,b)=>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      settickets(sorted);
      setUpdatestatus("ASC");
    } 
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fullWidth sx={{p: 2}}>
        <Paper sx={{p: 2}}>
          <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
            Ticket
            </Typography>
            </Box>
            <Box>
              <Link href="/Creact">
                <Button variant="contained">Creact</Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Lasr Name</TableCell>
                  <TableCell align="center">Username</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Description	</TableCell>
                  <TableCell align="center">Contract</TableCell>
                  <TableCell align="center">Information</TableCell>
                  <TableCell align="center">Time</TableCell>
                  <TableCell align="center">Action</TableCell>
                  <TableCell align="center" key = "status">
                    <TableSortLabel active = {true} direction= {'status'.toLowerCase()} onClick={()=>sorting()}>
                    Status
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                {tickets.map((row) => (
                  <TableRow
                    key={row.fname}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.fname}</TableCell>
                    <TableCell align="center">{row.lname}</TableCell>
                    <TableCell align="center">{row.username}</TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.contract}</TableCell>
                    <TableCell align="center">{row.information}</TableCell>
                    <TableCell align="center">{row.time}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Link href={"/edit/"+row.id}>
                      <Button variant="outlined">Edit</Button>
                        </Link>
                      </ButtonGroup>
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="success">
                        Success
                      </Button> 
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
