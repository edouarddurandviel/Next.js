import styled from "styled-components";

export const FieldSet = styled.div`
  position: relative;
  height: 95px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 2px solid #ff5e5b;
  background-color: white;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s;

  &:focus {
    box-shadow: 4px 4px 0px black;
  }
`;

export const Error = styled.div`
  position: absolute;
  bottom: 0;
  color: red;
  padding: 0px;
`;

export const Label = styled.label`
  padding: 4px 0px;
  font-size: 16px;
`;
