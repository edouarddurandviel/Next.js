import Link from "next/link";
import styled from "styled-components";

export const AsidePlaceholder = styled.aside`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  flex-direction: column;
`;

export const AsideNav = styled.nav`
  display: flex;
  width: 100%;
  background-color: #ff5e5b;
  margin: 10px 0;
  flex-direction: column;
`;

export const AsideLink = styled(Link)`
  width: 100%;
  padding: 10px 5px;
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;

  &:hover {
    background-color: #690909;
  }
`;
