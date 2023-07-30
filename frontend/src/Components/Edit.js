import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Box,  TextField, Typography, Container } from '@mui/material';
import axios from 'axios';


export default function Edit() {
  const { id } = useParams();
  const [tickets,settickets] = useState({
    id: "",
    fname: "",
    lname: "",
    username: "",
  });
  useEffect(() => {   
    axios.get("http://localhost:8081/edit/:{id}"+id)
      .then((result) => {
        console.log(id)
          settickets(result.data);
        })
  }, [id])
    const handleSubmit = (event) => {
          axios.post("http://localhost:8081/edit/:{id}",tickets)
          .then((result) => {
            if (result['status'] === 200){
              window.location.href = '/'
              alert("Create Susccess")
            }
          })
        }
        const [fname,setFName] = useState('');
        const [lname,setLName] = useState('');
        const [username,setUsername] = useState('');
        const [title,setTitle] = useState('');
        const [description,setDescription] = useState('');
        const [contract,setContract] = useState('');
        const [information,setInformation] = useState('');

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />             
          <Box
            sx={{ 
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Typography component="h1"variant="h5">
          Edit User
          </Typography>
          <form onSubmit ={handleSubmit}>
            <Box component="form" noValidate sx={{ mt: 5 }}>
              <TextField margin="normal" id="fname" label="First Name" variant="outlined"
                textAlign="center" required sx={{ width: 700}} type="text" autoFocus value={fname}
                onChange={(e) => setFName(e.target.value)}
              />
              <br>
              </br>
              <TextField margin="normal" id="lname" label="Last Name" variant="outlined"
                textAlign="center" required sx={{ width: 700}} type="text" autoFocus value={lname}
                onChange={(e) => setLName(e.target.value)}
              />          
              <TextField margin="normal" id="username" label="Username" variant="outlined"
                textAlign="center" required sx={{ width: 700}} type="text" autoFocus value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField margin="normal" id="title" label="Title" variant="outlined"
                textAlign="center" required sx={{ width: 700}} type="text" autoFocus value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField margin="normal" id="description" label="Description " variant="outlined"
                textAlign="center" required sx={{ width: 700}} type="text" autoFocus value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField margin="normal" id="contract" label="Contract" variant="outlined"
                textAlign="center" required sx={{ width: 700}} type="text" autoFocus value={contract}
                onChange={(e) => setContract(e.target.value)}
              />
              <TextField margin="normal" id="information" label="Information" variant="outlined"
                textAlign="center" required sx={{ width: 700}} type="text" autoFocus value={information}
                onChange={(e) => setInformation(e.target.value)}
              />
              <Button
                type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 1, bgcolor: '#e91e63'}}         
                component="a" onClick={handleSubmit} textAlign="center" href="/" >Edit</Button>
            </Box>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}
