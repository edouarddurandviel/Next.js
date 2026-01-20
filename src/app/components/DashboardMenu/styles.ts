import styled from "styled-components";

export const Aside = styled.aside`
  float: left;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const AsideMenu = styled.nav`
  display: flex;
  width: 100%;
  background-color: #ff5e5b;
  margin: 10px 0;
  flex-direction: column;

  & a {
    width: 100%;
    padding: 10px 5px;
    color: white;
    text-decoration: none;
    border-bottom: 1px solid white;

    &:hover {
      background-color: #690909;
      color: white;
    }
  }

  & a.current {
    background-color: #690909;
  }
`;
