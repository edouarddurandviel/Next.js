"use client";
import { useParams } from "next/navigation";
import { ItemList, ItemListDescription, ItemListTitle } from "../styles";
import { useOneAnalyticHook } from "@app/services/analytics/use-analytics";

const AnalyticsCompanyPage = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading, error } = useOneAnalyticHook(params.id);

  return (
    <>
      <div>Task description</div>
      <div>{error && <code>{error}</code>}</div>
      <div>
        {isLoading && "Loading..."}
        {data && (
          <ItemList>
            <ItemListTitle>{data.task}</ItemListTitle>
            <ItemListDescription>{data.description}</ItemListDescription>
          </ItemList>
        )}
      </div>
    </>
  );
};

export default AnalyticsCompanyPage;
