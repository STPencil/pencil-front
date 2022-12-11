// eslint-disable-next-line
import React from "react";
import styled from "styled-components";
import { useOnDraw } from "./CanvasHook";
import { jsPDF } from "jspdf";

const CanvasStyle = styled.div`
    canvas{
      border: 1px solid black;
      background-color : #FFFFFF;
    }
`
const NoteCanvas = ({
    width,
    height
}) => { 
    // setting
    const {setCanvasRef, onMouseDown} = useOnDraw(onDraw); // canvas ref 설정

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
    
    console.log();
    //var imageData = canvas.toDataURL("image/jpeg", 1.0);
    //var pdf = new jsPDF();

    //pdf.addImage(imageData, ' JPEG', 0, 0);
    //pdf.save("download.pdf");
  }

  return (
        <>
        <CanvasStyle>
          <canvas width={width} height={height} onMouseDown={onMouseDown} ref={setCanvasRef}/> 
        </CanvasStyle>
        
        </>
      );
};

export default NoteCanvas