import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";

export default function Index(){
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordTwo = (e) => {
    setPasswordTwo(e.target.value);
  };

  const onClickSignup = async () => {
    if(password != passwordTwo){
      alert("비밀번호와 비밀번호 확인란을 다시 확인해주세요.")
      return
    }
    console.log("signup onclick")
    const result = await axios({
      method: "POST",
      url: "http://localhost:8000/api/auth/signup",
      data: {
        userId: userId,
        password: password
      },
    },
    ).then(function (response){
      console.log("then in")
      console.log(response)
      if (response) {
        if (response.status == 200) {
          console.log("navigate in")
          navigate("/login");
        } else {
          alert('아이디 혹은 비밀번호를 다시 확인해주세요.')
        }
      } else {
        alert('아이디 혹은 비밀번호를 다시 확인해주세요.')
      }
    }).catch(function (error){
      console.log(error)
      alert('아이디 혹은 비밀번호를 다시 확인해주세요.')
    })
    
  };

  localStorage.removeItem('token')

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
          <div style={{fontSize: "100px"}}>
            📋
          </div>
          <Typography component="h1" variant="h5" style={{fontWeight: "300", fontSize: "40px"}}>
            Signup
          </Typography>
          <TextField 
            label="id" 
            required 
            fullWidth 
            name="id"
            autoFocus
            onChange={onChangeUserId}
            value={userId}
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
          <TextField 
            label="password 확인" 
            type="password" 
            required 
            fullWidth 
            name="passwordTwo"
            onChange={onChangePasswordTwo}
            value={passwordTwo}
            margin="normal"
          />
          <Button 
            type="submit" 
            fullWidth 
            variant="contained" 
            sx={{mt: 3, mb: 2}}
            onClick={() => onClickSignup()}
          >
            Sign up
          </Button>
        </Box>
      </Container>
    </div>
  )
}