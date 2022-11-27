/* eslint-disable */
import React from "react";
import NoteHeader from "../../components/NoteLayout/NoteHeader";
import styled from "styled-components";

const NoteWrapper = styled.div`
    width : 100vw;
    margin : 0;

    .content{
      height: 100vh;
      overflow-y: scroll; 
      background-color : #FAFAFF;
    }
`;

const Index = () => {
    return(   
      <NoteWrapper>
        <NoteHeader> 웹 프로그래밍 </NoteHeader>
        <div className="content"></div>
      </NoteWrapper>
    );
  };
  
  export default Index;