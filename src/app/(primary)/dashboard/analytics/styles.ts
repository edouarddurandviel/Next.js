import Link from "next/link";
import styled from "styled-components";

export const ItemList = styled.div`
  display: flex;
  padding: 10px;
  height: 50px;
  width: 100%;
  margin: 10px 0 0 0;
  box-sizing: border-box;
  border: 1px solid #ff5e5b;
  background-color: white;
  color: #200202;
  flex-direction: row;
  align-items: center;
`;

export const ItemListTitle = styled.div`
  font-weight: 500;
  min-width: 200px;
`;

export const ItemListDescription = styled.div`
  font-style: italic;
  margin: 0 20px;
`;

export const ItemLink = styled(Link)`
  display: block;
  padding: 3px 10px;
  height: 20px;
  width: auto;
  margin: 0 10px 0 0;
  float: left;
  text-decoration: none;
  line-height: 12px;
  font-size: 10px;
  background-color: #ff5e5b;
  color: white;
`;

export const TaskTitle = styled.h2`
  display: inline;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
`

export const ButtonView = styled.div`
  display: block;
  padding: 3px 10px;
  height: 20px;
  width: 80px;
  cursor: pointer;
  text-decoration: none;
  line-height: 12px;
  font-size: 10px;
  background-color: #ff5e5b;
  color: white;
  margin: 0 0 0 10px;
`;

