import Link from "next/link";
import styled from "styled-components";

export const BlogPlaceHolder = styled.div`
  color: black;
`;

export const ArticleBody = styled.div`
  margin: 0;
`;

export const ArticleMain = styled.main`
  margin: 10px 0 0 0;
`;

export const LinkBack = styled(Link)`
  padding: 0;
  display: block;
  line-height: 16px;
  margin: 10px 0 30px 0;
  color: black;
  &:hover {
    text-decoration: none;
  }
`;
