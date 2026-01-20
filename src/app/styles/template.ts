import styled from "styled-components";

export const HeaderApi = styled.header`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: white;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
`;

export const PlaceHolder = styled.div`
  clear: both;

  width: 100%;
  min-height: 300px;
`;

export const Body = styled.body`
  margin: 0;
  padding: 0;
`;

export const Container = styled.div`
  width: 100%;
  clear: both;
  display: flex;
  height: 700px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
`;

export const Centered = styled.div`
  width: 100%;
  clear: both;
  display: flex;
  height: 700px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Placeholder = styled.div`
  float: left;
  width: 60%;
`;

export const Button = styled.button`
  width: 200px;
  padding: 12px;
  background-color: white;
  color: black;
  border: 2px solid #690909;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid base.$primary;
  background-color: var(--secondary);
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s;

  &:focus {
    box-shadow: 4px 4px 0px base.$fontColor;
  }
`;

export const Label = styled.label`
  padding: 4px 0px;
`;

// export const InputGroup = styled.label`
//     display: block;
//     margin-bottom: 8px;
//     font-weight: bold;
//     color: base.$font;
//   `;
