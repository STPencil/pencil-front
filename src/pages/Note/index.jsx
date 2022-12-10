/* eslint-disable */
import React from "react";
import NoteCanvas from "../../components/NoteLayout/NoteCanvas";
import NoteHeader from "../../components/NoteLayout/NoteHeader";
import styled from "styled-components";

const NoteWrapper = styled.div`
    width : 100vw;
    margin : 0;

    .content{
      height: 100vh;
      overflow-y: scroll; 
      background-color : #FAFAFF;
      
      /*canvas를 맞춰주기 위함*/
      display: flex;
      justify-content: center;
      align-items: center;

      /*canvas 그림자*/
      box-shadow: 0px 5px 2px 1px rgba(0, 0, 0, .10);
    }
`;

const Index = () => {
    return(   
      <NoteWrapper>
        <NoteHeader> 웹 프로그래밍 </NoteHeader>
        <div className="content">
          <NoteCanvas width={700} height={500}></NoteCanvas>
        </div>
      </NoteWrapper>
    );
  };
  
  export default Index;