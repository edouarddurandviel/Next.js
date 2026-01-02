import styled from "styled-components";

export const Aside = styled.aside`
  float: left;
  margin: 0;
  padding: 0;
  width: 30%;
  background-color: white;
  font-family: "Courier New", monospace;
  font-size: 12px;
  margin-top: 20px;
`;

export const AsideMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  list-style-type: none;

  & a {
    font-size: 15px;
    color: white;
    text-decoration: none;
    padding: 10px;
    line-height: 15px;

    &:hover {
      background-color: red;
      color: white;
    }
  }

  & a.current {
    background-color: red;
  }
`;
