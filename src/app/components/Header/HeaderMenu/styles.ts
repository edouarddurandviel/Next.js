import styled from "styled-components";

export const MainMenu = styled.div`
  margin: 0;
  padding: 0;
  width: auto;
  height: 50px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderMenu = styled.nav`
  margin: 0;
  padding: 0;
  height: 40px;
  display: flex;
  width: 1000px;
  list-style-type: none;
  border: 1px solid #d4d4d4ff;
  overflow: hidden;

  & a {
    display: flex;
    font-family: system-ui;
    color: #2f2a49ff;
    font-weight: bold;
    text-decoration: none;
    border-left: 1px solid #d4d4d4ff;
    font-size: 15px;
    width: 100%;
    height: 40px;
    align-items: center;
    flex-direction: row;
    align-content: center;
    justify-content: center;

    &:first-of-type {
      border: none;
    }

    &:hover {
      color: #6a55c7ff;
    }
  }

  & .current {
    color: #6a55c7ff;
  }
`;
