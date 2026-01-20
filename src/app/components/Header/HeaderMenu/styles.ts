import styled from "styled-components";

export const MainMenu = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 40px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #ff5e5b;
`;

export const MenuHeader = styled.nav`
  margin: 0;
  padding: 0;
  height: 40px;
  display: flex;
  width: 100%;
  list-style-type: none;
  overflow: hidden;

  & a {
    display: flex;
    font-family: system-ui;
    color: #ffffff;
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
      background-color: #690909;
      color: white;
    }
  }

  & .current {
    background-color: #690909;
    color: white;
  }
`;
