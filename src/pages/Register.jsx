import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useAppContext} from '../contaxt/contaxt'
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const defaultTheme = createTheme();
const Register = () => {
  
  const  navigate = useNavigate();
  const {registerUser,
    name,
    windowSize,
    // user_id,
    // shop_id,
    // registerShop,
    // registerMoney,
  } = useAppContext();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      email: data.get('email'),
      password: data.get('password'),
      first_name: data.get('firstName'),
      number: data.get('number'),
      shop: data.get('shop'),
      last_name: data.get('lastName'),
    }
 
     registerUser(form);

    //  setTimeout(()=>{
    //   console.log(user_id)
    //    registerShop({id:user_id,phone:form.number ,name:form.shop});
    //   setTimeout(()=>{

    //      registerMoney(shop_id);

    //   },1500)
    // },5000)
  };
  useEffect( ()=>{
    if(name !== null && name !== undefined ){
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
    console.log('chalti ka nam gadi')
    },[navigate, name]);
  return (
    <>
    {(windowSize.width > 768) ? <Box className="flex" >
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
                  Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="shop"
                        label="shop name"
                        name="shop"
                        autoComplete="shop"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="number"
                        label="Enter Number"
                        type="number"
                        id="num"
                        autoComplete="num"
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


                      <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="check" />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/login" className='text-blue-600' >
                        Already have an account? Sign in
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
      </Box > : < >
        <Box className="w-[100vw] -mt-16 h-[100%] bg-img "  >
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
                  Sign up
                </Typography>
                <Box className='blocks p-[25px]' component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="shop"
                        label="shop name"
                        name="shop"
                        autoComplete="shop"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="number"
                        label="Enter Number"
                        type="number"
                        id="num"
                        autoComplete="num"
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


                      <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="check" />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/login" className='text-white' >
                        Already have an account? <span className='text-blue-400'> Sign in </span> 
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 5 , color: "white" }} />
            </Container>
          </ThemeProvider>
          {/* </Box> */}
        </Box>
        
      </ >}
      
    </>
  )
}

export default Register




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


