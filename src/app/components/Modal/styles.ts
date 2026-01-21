import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgb(0 0 0 / 72%);
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const ModalPlaceholder = styled.div`
  position: relative;
  z-index: 1001;
  width: 500px;
  height: 300px;
  background-color: white;
`;

export const ButtonView = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  padding: 9px 10px;
  height: 30px;
  width: 120px;
  cursor: pointer;
  text-decoration: none;
  line-height: 12px;
  font-size: 12px;
  background-color: #ff5e5b;
  color: white;
`;
