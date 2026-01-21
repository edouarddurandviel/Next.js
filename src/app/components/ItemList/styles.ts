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
  text-decoration: none;
  line-height: 12px;
  font-size: 10px;
  background-color: #ff5e5b;
  color: white;
`;

export const ButtonView = styled.div`
  display: block;
  padding: 3px 10px;
  height: 20px;
  cursor: pointer;
  text-decoration: none;
  line-height: 12px;
  font-size: 10px;
  background-color: #ff5e5b;
  color: white;
`;

export const Notes = styled.div`
  color: #200202;
  width: 100%;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #ff5e5b;
  margin: 10px 0;
`;
