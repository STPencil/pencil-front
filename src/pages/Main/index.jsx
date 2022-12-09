/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Link, Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FileItem from './fileItem';
import axios from "axios";
import logout from "../../assets/img/logout.png"
import plusIcon from "../../assets/icon/plus_document.png"
import FileList from './fileList';
import { render } from "@testing-library/react";


const MainWrapper = styled.div`

  width: 100%;
  height: 100vh;
  background-color: #FAFAFF;  
  .top{
    height: 10%;
    width: 100%;
    display: flex;  
    .title{
      width: 90%;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 49px;
      text-align: center;
      margin: 20px;
      justify-content: center;
      align-items: center;
      display: flex;  
    }
    .logout-icon{
      width: 10%;
      margin: 25px;
      width: 40px;
      height: 40px; 
      justify-content: flex-end;
    }
  }
  .middle{
    align-items: center;
    justify-content: center;
    display: flex;
    width: 92%;
    .align-button-selected{
      font-weight: 500;
      font-size: 25px;
      line-height: 49px;
      background: #5F84A2;
      border-radius: 30px;
      width: 170px;
      height: 50px;
      margin: 10px;
      text-align: center;
      color: white;
      border: none;
    }
    .align-button{
      font-weight: 500;
      font-size: 25px;
      line-height: 49px;
      background: #EBEBEB;
      border-radius: 30px;
      width: 170px;
      height: 50px;
      margin: 10px;
      text-align: center;
      border: none;
    }
  }
  .bottom{
    padding-top: 90px;
    padding-bottom: 120px;
    padding-left: 100px;
    padding-right: 200px;
    display: flex;
    width: 90%;
    .plus-document{
      background-color: white;
      border: 3px dashed #DBECF4;
      border-radius: 20px;
      width: 146px;
      height: 210px;
      position: relative;
      margin-right: 100px;
      .plus-icon{
        position: absolute;
        width: 70px;
        top: 70px;
        left: 40px;
      }
    }


    .files{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .file-group{
        display: block;
        padding-top: 25px;
        margin-right: 100px;
        .file{
          width: 160px;
        }
        .file-name{
          font-weight: 400;
          font-size: 20px;
          line-height: 44px;
          text-align: center;
          padding-left: 10px;
        }
      }
    }
  }
  
`

export default function Index(){

  const [files, setFiles] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [buttonNum, setButtonNum] = useState(new Number(1));

  useEffect(() => {
    axios.get('http://localhost:8000/api/user/homeDesc', {
      headers: {
        Authorization: "bearer " + localStorage.getItem('token')
      }
    })
    .then(response => {
      setFiles(response.data.result);
      setOrigin(response.data.result);
    });
  }, []);

  var clickedButton = new Number(1)
  function onClickDesc(){
    setButtonNum(new Number(1))
    setFiles([...origin])
  }

  const ascSortResult = [...files].sort(function(a,b){
    let x = a.id
    let y = b.id
    if(x<y){
      return -1
    } 
    if(x>y){
      return 1
    }
    return 0
  })

  const onClickAsc = async () => {
    setButtonNum(new Number(2))
    setFiles(ascSortResult)
  }

  const nameSortResult = [...files].sort(function(a,b){
    let x = a.title.toLowerCase()
    let y = b.title.toLowerCase()
    if(x<y){
      return -1
    } 
    if(x>y){
      return 1
    }
    return 0
  })

  const onClickName = async () => {
    setButtonNum(new Number(3))
    setFiles(nameSortResult)
  }


  const navigate = useNavigate();
  const onClickLogout = async () => {
    var confirmLogout = confirm("로그아웃 하시겠습니까?")
    if(confirmLogout){
      localStorage.removeItem('token')
      navigate('/login')
    }
  }


  const fileInput = React.useRef(null);
  const handleButtonClick = e => {
    fileInput.current.click();
  };
  const handleChange = e => {
    console.log(e.target.files[0]);
  };

  console.log('final log' + files)

  return(
    <MainWrapper>
      <div className="top">
        <div className="title">
          MyPaper
        </div>
        <img className="logout-icon" onClick={onClickLogout} src={logout} alt="logout" />
      </div>
      <div className="middle">
        <button className={buttonNum == 1 ? "align-button-selected" : "align-button"} onClick={() => onClickDesc()}>
          최신순
        </button>
        <button className={buttonNum == 2 ? "align-button-selected" : "align-button"} onClick={() => onClickAsc()}>
          오래된순
        </button>
        <button className={buttonNum == 3 ? "align-button-selected" : "align-button"} onClick={() => onClickName()}>
          이름순
        </button>
      </div>
      <div className="bottom">
        <div onClick={handleButtonClick}>
          <button className="plus-document">
            <img className="plus-icon" src={plusIcon} alt="plus document"/>
          </button>
        </div>
        <input style={{display: "none"}} type="file" id="fileUpload" ref={fileInput} onChange={handleChange}/>
        
        {/* <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div> */}
        {/* <FileList props={files} /> */}

        <div className="files">
            {files && files.map((file, index) => (
              <div className="file-group" key={index}>
                <img className='file' src={file.preview_img} style={{borderRadius: "10px"}}></img>
                <div className='file-name'>{file.title}</div>
              </div>
              // <FileItem  key={index} id={file.id} userId={file.user_id} createdAt={file.created_at} title={file.title} pdfUrl={file.pdf_url} previewImg={file.preview_img} />
            ))}
        </div>
        
      </div>

    </MainWrapper>
  );
};