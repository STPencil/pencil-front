import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
    width: calc(100% - 32px);
    height: 32px;
    background-color: gray;
    border-radius: 10px;
    padding: 0px 16px;
    font-size: 14px;
    &::placeholder {
        color: gray;
        font-weight: 400;
        font-size: 14px;
    }
`;

const MainInput = ({ value, type, onChange, handleFocus, placeholder}) => {
    return (
        <CustomInput
            value={value}
            type={type}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={handleFocus}
            placeholder={placeholder}
            spellCheck={false}
        />
    );
};

export default MainInput;