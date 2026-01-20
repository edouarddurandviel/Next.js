import Link from "next/link";
import styled from "styled-components";

export const ListArticleMain = styled.main`
  margin: 20px 0;
`;

export const ListArticle = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  margin: 10px 0 0 0;
  box-sizing: border-box;
  border: 2px solid #ff5e5b;
  background-color: white;
  color: #200202;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
`;

export const ListArticleLink = styled(Link)`
  font-size: 16px;
  color: black;
  text-align: right;
  &:hover{
  text-decoration: none;
`;

export const ListArticleH1 = styled.h1`
  font-size: 20px;
  margin: 0;
`;

export const ListArticleP = styled.p`
  margin: 0;
`;
