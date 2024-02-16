import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {useAppContext} from '../contaxt/contaxt'
const defaultTheme = createTheme();
const Login = () => {

  const{sp} = useAppContext();
  const  navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const current_user = {
          text: data.get('text'),
          password: data.get('password'), 
        }

        const responce = await sp.post('/login',current_user);
        console.log(responce.status);
        if(responce.status == 200){
          navigate('/dashboard');
        }
        
      };
    return (
        <>
            <Box className="flex" >
                <Box className="w-[50vw] h-[100vh] "  >
                    {/* <Box className="container bg-black"> */}
                    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address or Phone Number"
                  name="text"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                
                
                <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary"  />} label="check" />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" className='text-blue-600' >
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
                    {/* </Box> */}
                </Box>
                <Box className="w-[50vw] h-[100vh] bg-img"  >
          <Box className="blocks w-[25vw] h-[50vh] relative top-[25vh] left-[12.5vw] text-white  text-center items-center"  >
            <p className='relative top-[25%]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis corrupti molestias neque inventore? Accusamus, laboriosam cupiditate sunt iste repudiandae aspernatur, temporibus ea eaque iure tempora ullam ducimus aperiam soluta?</p>
          </Box>
        </Box>
            </Box >
        </>
    )
}

export default Login




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="https://spgaming2056.w3spaces.com">
        SPARROWTECH
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


