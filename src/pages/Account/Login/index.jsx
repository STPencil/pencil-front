import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import logo from "../../../assets/img/login_right_image.png";
import MainInput from "../../../components/MainInput";
import axios from "axios";

const MainWrapper = styled.div`
  .screen{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .left-side {
    width:50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .right-side {
    width: 50%;
    background-size: contain;
  }
  .input-wrapper {
    margin: 8px 40px 0px 40px;
  }
  .my-paper{
    font-size: 17px;
    font-weight: 700;
  }
  .login{
    font-size: 14px;
    font-weight: 500;
  }
  img{
    width: 100%;
    height: auto;
    background-size: cover;
    background-position: center;

  }
`

const Index = () => {
  const [isFocus, setIsFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleFocus = () => {
    if (isFocus) {
      setIsFocus(false);
    } else {
      setIsFocus(true);
    }
  }
  const onClickLogin = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "/api/user/login",
        data: {
          user_id: username,
          password: password,
        },
      });
      if(result.data.success){
        window.location.href = "/";
      } else{
        setIsOpen(true);
        setErrorText(result.data.message);
        alert("아이디 혹은 비밀번호가 틀립니다.");
      }
    } catch{
      alert("server error");
    }
  };

  return(
    <MainWrapper>
      <div className="screen">
        <div className="left-side">
          <div className="my-paper">MyPaper</div>
          <div className="login">Login</div>
          <div className="input-wrapper">
            <MainInput 
              type="username" 
              value={username} 
              onChange={onChangeUsername} 
              placeholder="username" 
              handleFocus={handleFocus} 
            />
          </div>
          <div className="input-wrapper">
            <MainInput 
              handleFocus={handleFocus} 
              type="password"
              value={password}
              onChange={onChangePassword}
              placeholder="password"
            />
          </div>
        </div>
        <div className="right-side">
          <img src={logo} alt="ST_Pencil logo"/>
        </div>

      </div>
    </MainWrapper>
  );
};

export default Index;