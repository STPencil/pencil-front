/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { useOnDraw } from "../../components/NoteLayout/CanvasHook";
import {IconButton } from '@mui/material';
import { NavigateBeforeRounded, UndoRounded, RedoRounded, NoteAddOutlined, SaveOutlined, Edit, Crop32Outlined, BorderColorOutlined ,FormatShapes} from "@mui/icons-material";
import { jsPDF } from "jspdf";

const HeaderWrapper = styled.div`
    width : 100vw;
    height : 10%;
    box-shadow: 0px 5px 2px 1px rgba(0, 0, 0, .10);
    position: fixed;

    .menubar{
        width : 100vw;
        height : 55%;
        justify-content: space-between; /* 수평축(메인축)으로 어떻게 배치?! -> 아이템 사이 동일한 간격을 두어서 */ 
        align-items : center; /* 수직축으로 중심 배치  */ 
        background-color : #194569;
        display : flex; /* block을 가로 방향으로 일렬로 배치, 자동으로 블록들이 inline으로 바뀜 */
        
    }

    .left{

    }

    .center{

    }

    .right{

    }

    .toolbar{
        width : 100vw;
        height : 50%;
        background-color : #FFFFFF;
        display : flex;
        justify-content: space-evenly;
        margin-bottom : 10dp;
        align-items : center;
    }

    span{
        color : white;
        font-size : 120%;
        font-weight : medium;
        text-align: center;
    }

`;

const CanvasStyle = styled.div`
    canvas{
      border: 1px solid black;
      background-color : #FFFFFF;
    }
`

const iconButtonStyles = {
    color: "white",
  };
  
const toolButtonStyles = {
    color: "black",
 };

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

  const {setCanvasRef, onMouseDown} = useOnDraw(onDraw); // canvas ref 설정
  const personInfo = useRef();

  // 그림그리는 function 만들기
  function onDraw(ctx, point, prevPoint){
     drawLine(prevPoint, point, ctx, '#000000', 5);
  }

  // 끊기지 않게 그려주기 위함 
  function drawLine(start, end, ctx, color, width)
  {
      if(start == null) start = end; // 왼쪽이 null이면 오른쪽을 return 
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = color;
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();

      // 펜을 부드럽게 하기 위해 
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(start.x, start.y, 2, 0, 2*Math.PI);
      ctx.fill();
  }

  function clickDownLoad(){
    var canvas = personInfo.current;
    var imageData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF();

    pdf.addImage(imageData, ' JPEG', 0, 0);
    pdf.save("download.pdf");
  }

    return(   
      <NoteWrapper>
        <HeaderWrapper>
            <div className="menubar">
                <div className="left">
                        <IconButton aria-label="back" disableRipple><NavigateBeforeRounded sx={iconButtonStyles} fontSize="large"/></IconButton>
                        <IconButton aria-label="save" disableRipple><SaveOutlined sx={iconButtonStyles} fontSize="medium"/></IconButton>
                    
                </div>
                <div className="center">
                    <span> 웹 프로그래밍 </span>
                </div>
                <div className="right">
                    <IconButton aria-label="undo" disableRipple><UndoRounded sx={iconButtonStyles} fontSize="medium"/></IconButton>
                    <IconButton aria-label="redo" disableRipple><RedoRounded sx={iconButtonStyles} fontSize="medium"/></IconButton>
                    <IconButton aria-label="noteAdd" disableRipple><NoteAddOutlined sx={iconButtonStyles} fontSize="medium"/></IconButton>
                </div>
            </div>
            <div className="toolbar"> 
                    <IconButton aria-label="pen" disableRipple ><Edit sx={toolButtonStyles} fontSize="40px"/></IconButton>
                    <IconButton aria-label="erasor" disableRipple><Crop32Outlined sx={toolButtonStyles} fontSize="40px"/></IconButton>
                    <IconButton aria-label="highlighter" disableRipple><BorderColorOutlined sx={toolButtonStyles} fontSize="40px"/></IconButton>
                    <IconButton aria-label="text" disableRipple><FormatShapes sx={toolButtonStyles} fontSize="40px"/></IconButton>
            </div>
            
        </HeaderWrapper>
        <div className="content">
          <CanvasStyle>
            <canvas ref={personInfo} width={500} height={500} onMouseDown={onMouseDown} ref={setCanvasRef}/> 
            <button text="다운로드" onClick={clickDownLoad()} />
          </CanvasStyle>
        </div>
      </NoteWrapper>
    );
  };
  
  export default Index;