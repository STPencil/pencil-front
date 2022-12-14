import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField"
import CheckBox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";


export default function Index(){
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errorText, setErrorText] = useState("");


  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    console.log("onclick in")
    const result = await axios({
      method: "POST",
      url: "http://localhost:8000/api/auth/login",
      data: {
        userId: userId,
        password: password
      },
    }).then(function (response) {
      console.log(response.data)
      if (response) {
        if (response.data.status) {
          localStorage.setItem('token', response.data.token);
          navigate('/main');
        } else {
          alert('아이디 혹은 비밀번호를 다시 확인해주세요.')
        }
      } else {
        alert('아이디 혹은 비밀번호를 다시 확인해주세요.')
      }
    }).catch(function (error){
      console.log(error.response.status)
      console.log(error.response.data.error)
      if(error.response.status==401){
        alert('아이디 혹은 비밀번호를 다시 확인해주세요.')
      }
    })
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
          <div style={{fontSize: "100px"}}>
            📋
          </div>
          <Typography component="h1" variant="h5" style={{fontWeight: "300", fontSize: "40px"}}>
            Login
          </Typography>
          <TextField 
            label="id" 
            required 
            fullWidth 
            name="id"
            onChange={onChangeUserId}
            value={userId}
            autoFocus
            margin="normal"
          />
          <TextField 
            label="password" 
            type="password" 
            required 
            fullWidth 
            name="password"
            onChange={onChangePassword}
            value={password}
            margin="normal"
          />
          <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}} onClick={() => onClickLogin()}>Login</Button>

          <Grid container>
            <Grid item xs>
              <Link>"아직 회원가입 전이신가요?"</Link>
            </Grid>
            <Grid item>
              <Link>"회원가입 하러가기"</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}