// eslint-disable-next-line
// eslint-disable-next-line
import React, {useRef, useState} from "react";
import { clickDownLoad } from "./ToolHook";
import styled from "styled-components";
import {IconButton } from '@mui/material';
import { NavigateBeforeRounded, UndoRounded, RedoRounded, NoteAddOutlined, SaveOutlined, Edit, Crop32Outlined, BorderColorOutlined ,FormatShapes} from "@mui/icons-material";

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

const iconButtonStyles = {
    color: "white",
  };
  
const toolButtonStyles = {
    color: "black",
 };

// NoteHeader 부분 
const NoteHeader = ({children}) => 
{
    var canvas = useRef(null);

    return(
    <>
        <HeaderWrapper>
            <div className="menubar">
                <div className="left">
                    <utton>
                        <IconButton aria-label="back" disableRipple><NavigateBeforeRounded sx={iconButtonStyles} fontSize="large"/></IconButton>
                    </utton>
                    <button onClick={clickDownLoad(canvas)}>
                        <IconButton aria-label="save" disableRipple><SaveOutlined sx={iconButtonStyles} fontSize="medium"/></IconButton>
                    </button>
                    
                </div>
                <div className="center">
                    <span> {children} </span>
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
        
    </>
        
    );
    
};

export default NoteHeader