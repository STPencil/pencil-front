import React from 'react';
import styled from "styled-components";

const MainWrapper = styled.div`
  .files{
    width: 200px;
    margin-right: 100px;
    display: block;
    .file{
      width: 160px;
    }
    .file-name{
      font-weight: 400;
      font-size: 32px;
      line-height: 44px;
      text-align: center;
      padding-left: 10px;
    }
  }
`
const FileItem = (props) => {
  return (
    <div className='files'>
      <img className='file' src={props.previewImg} style={{borderRadius: "10px"}}></img>
      <div className='file-name'>{props.title}</div>
    </div>
  //   <div className='file-group'>
  //   <img className='file' src={props.previewImg}></img>
  //   <div className='file-name'>{props.title}</div>
  // </div>
  );
};

export default FileItem;