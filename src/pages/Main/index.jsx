/* eslint-disable */

import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";
import setting from "../../assets/icon/setting.png"
import plusIcon from "../../assets/icon/plus_document.png"
import folder from "../../assets/img/folder.png"

const MainWrapper = styled.div`

  width: 100%;
  height: 100%;
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
    .setting-icon{
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
    }
  }
  .bottom{
    padding-top: 90px;
    padding-bottom: 120px;
    padding-left: 200px;
    padding-right: 200px;
    display: flex;
    flex-wrap: wrap;
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

    .folder-group{
      height: 210px;
      width: 146px;
      display: block;
      padding-top: 25px;
      margin-right: 100px;
      .folder{
        width: 160px;
      }
      .folder-name{
        font-weight: 400;
        font-size: 32px;
        line-height: 44px;
        text-align: center;
        padding-left: 10px;
      }
    }
  }
  
`

const Index = () => {

  return(
    <MainWrapper>
      <div className="top">
        <div className="title">
          MyPaper
        </div>
        <img className="setting-icon" src={setting} alt="setting" />
      </div>
      <div className="middle">
        <div className="align-button-selected">
          날짜
        </div>
        <div className="align-button">
          이름
        </div>
        <div className="align-button">
          유형
        </div>
      </div>
      <div className="bottom">
        <div className="plus-document">
          <img className="plus-icon" src={plusIcon} alt="plus document" />
        </div>
        <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div>
        <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div>
        <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div>
        <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div>
        <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div>
        <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div>
        <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div>
        <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div>
        <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div>
        <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div>
        <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div>
        <div className="folder-group">
          <img className="folder" src={folder} alt="folder" />
          <div className="folder-name">mobile</div>
        </div>
        
        

      </div>

    </MainWrapper>
  );
};

export default Index;