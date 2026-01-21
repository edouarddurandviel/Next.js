"use client";
import { useParams } from "next/navigation";
import { ButtonView, ItemList, ItemListDescription, ItemListTitle } from "../styles";
import { useOneAnalyticHook } from "@app/services/analytics/use-analytics";

const AnalyticsCompanyPage = () => {
  const params = useParams<{ id: string }>();
  const { analytics, isLoading, error, updateAnalytic } = useOneAnalyticHook(params.id);

  return (
    <>
      <div>Task description</div>
      <div>{error && <code>{error}</code>}</div>
      <div>
        {isLoading && "Loading..."}
        {analytics && (
          <ItemList>
            <ItemListTitle>{analytics.task}</ItemListTitle>
            <ItemListDescription>{analytics.description}</ItemListDescription>
            <ButtonView
              onClick={() => {
                updateAnalytic({
                  id: analytics.id,
                  task: analytics.task,
                  description: `${analytics.description.split(":")[0]}: ${new Date()}`,
                });
              }}
            >
              Change item date
            </ButtonView>
          </ItemList>
        )}
        {analytics && (
          <code>
            {analytics.description} {analytics.id} {analytics.task}
          </code>
        )}
      </div>
    </>
  );
};

export default AnalyticsCompanyPage;
