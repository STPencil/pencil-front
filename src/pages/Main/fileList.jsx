import React from 'react';
import FileItem from './fileItem';
import styled from "styled-components";

const MainWrapper = styled.div`
  .files{
    width: 100vh;
    height: 210px;
    width: 160px;
    padding-top: 25px;
    margin-right: 100px;
    display: flex;
    flex-wrap: wrap;
  }
`

const FileList = ({props}) => {
  return (
    <div className='files'>
      {props && props.map((file, index) => (
        <FileItem key={index} id={file.id} userId={file.user_id} createdAt={file.created_at} title={file.title} pdfUrl={file.pdf_url} previewImg={file.preview_img} />
      ))}
    </div>
  );
};

export default FileList;