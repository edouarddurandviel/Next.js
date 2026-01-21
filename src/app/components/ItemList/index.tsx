"use client";
import { useAppDispatch } from "@app/store/hooks";
import { ButtonView, ItemLink, ItemList, ItemListDescription, ItemListTitle } from "./styles";
import { startEvent } from "@app/store/uiEvents/slices";
import { Analitics } from "@app/types/types";

const Index = ({ stat }: { stat: Analitics }) => {
  const dispatch = useAppDispatch();

  return (
    <ItemList>
      <ItemListTitle>{stat.task}</ItemListTitle>
      <ItemListDescription>{stat.description}</ItemListDescription>
      <ItemLink href={`/dashboard/analytics/${stat.id}`}>View</ItemLink>
      <ButtonView
        onClick={() => {
          dispatch(startEvent());
        }}
      >
        Modal
      </ButtonView>
    </ItemList>
  );
};

export default Index;
