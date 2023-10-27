import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import kakaoicon from './LoginImg/kakaoicon.png';
import googleico from './LoginImg/googleicon.png';
import navericon from './LoginImg/navericon.png';
import './LoginCss/Login.css';
import { useState } from 'react';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

function Login( {setUserInfo, setIsAuth} ) {
  
  const defaultTheme = createTheme();
  const navigate = useNavigate();
  
  const [loginData, setLoginData] = useState({
    id : '',
    pw : '',
  });

  const idPwInputHandler = (e) => {
    const { id, value } = e.target;
    setLoginData({
      ...loginData,
      [id]: value,
    });
  };

  const loginBtnClickHandler = (e) => {

    e.preventDefault();

    axiosInstance.post('/login', loginData)
      .then((response) => {
        console.log("로그인 성공");
        localStorage.setItem('id', loginData.id);
        setUserInfo(loginData);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert("아이디 패스워드를 확인하세요.")
      });
  }

  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ 
          marginTop: 8, 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          }}
        >

    <Typography component="h1" variant="h5"> 로그인 </Typography>

    <Box component="form" noValidate sx={{ mt: 1 }}>
    <TextField margin="normal" required fullWidth id="id"
      label="아이디" name="id" autoComplete="id" autoFocus 
      onChange={idPwInputHandler} value={loginData.id} />

    <TextField margin="normal" required fullWidth label="비밀번호" 
      type="password" id="pw" autoComplete="current-password"
      onChange={idPwInputHandler} value={loginData.pw} />

    <FormControlLabel control={<Checkbox value="remember" color="primary" />}
      label="아이디 저장" />

    <Button type="submit" fullWidth variant="contained" 
      style={{ backgroundColor: "#9DC8C8" }} sx={{ mt: 3, mb: 1 }} 
      onClick={loginBtnClickHandler}> 로그인 </Button>
              
    <div className='loginBox'>
      <a href="#!"><img src={kakaoicon} alt = "kakaoLoginImg"></img></a>
      <a href="#!"><img src={googleico} alt = "googleLoginImg"></img></a>
      <a href="#!"><img src={navericon} alt = "naverLoginImg"></img></a>
    </div>

    <Grid container>
      <Grid item xs>
        <Link href="#" style={{ textDecoration: "none" }} variant="body2"> 아이디 찾기 </Link>
      </Grid>
      <Grid item xs>
        <Link href="#" style={{ textDecoration: "none" }} variant="body2"> 비밀번호 찾기 </Link>
      </Grid>
      <Grid item>
        <Link href="/" style={{ textDecoration: "none" }} variant="body2"> {"회원가입"} </Link>
      </Grid>
    </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;



