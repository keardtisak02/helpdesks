import React ,{ useState }from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios'


export default function Create() {
  const Create = (event) => {
    axios.post('http://localhost:8081/creact',{
      fname : fname,
      lname : lname,
      username : username,
      title: title,
      description: description,
      contract: contract,
      information: information
    }).then((result) => {
      console.log(result)
        if(result['status'] === 200){
          window.location.href = '/'
        }
    });
  }
 
    const [fname,setFName] = useState('');
    const [lname,setLName] = useState('');
    const [username,setUsername] = useState('');
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [contract,setContract] = useState('');
    const [information,setInformation] = useState('');
    
  return (

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
            Ticket
          </Typography>
          <Box component="form" noValidate sx={{ mt: 5 }}>
            <TextField
              margin="normal"
              required sx={{ width: 700}}
              id="fname" label="First Name" name="fname" autoComplete="fname" autoFocus   
              onChange={(e) => setFName(e.target.value)}
            />
             <TextField
              margin="normal"
              required fullWidth
              id="lname" label="Last Name" name="lname" autoComplete="lname" autoFocus
              onChange={(e) => setLName(e.target.value)}
            />
             <TextField
              margin="normal"
              required fullWidth
              id="username" label="Username" name="username" autoComplete="username" autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required fullWidth
              id="title" label="Title" name="title" autoComplete="title" autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              margin="normal"
              required fullWidth
              id="description" label="Description" name="description" autoComplete="description" autoFocus
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              margin="normal"
              required fullWidth
              id="contract" label="Contract" name="contract" autoComplete="contract" autoFocus
              onChange={(e) => setContract(e.target.value)}
            />
            <TextField
              margin="normal"
              required fullWidth
              id="information" label="Information" name="information" autoComplete="information" autoFocus
              onChange={(e) => setInformation(e.target.value)}
            />
              <Button
                type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor: '#e91e63'}}         
                component="a" onClick={Create} textAlign="center" href="/" >Creact</Button>
          </Box>
        </Box>
      </Container>
  );
}