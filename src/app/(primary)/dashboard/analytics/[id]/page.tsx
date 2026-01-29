"use client";
import { useParams } from "next/navigation";
import { ButtonView, ItemList, ItemListDescription, ItemListTitle, ItemLink, TaskTitle } from "../styles";
import { Notes } from "@app/styles/template"
import { useOneAnalyticHook } from "@app/services/analytics/use-analytics";

const AnalyticsCompanyPage = () => {
  const params = useParams<{ id: string }>();
  const { analytics, isLoading, error, updateAnalytic } = useOneAnalyticHook(params.id);

  return (
    <>
      <Notes>
        <div><strong>Client side</strong> rendering</div>
        <div>The detail page is fetched with SWR through restAPI app/api/analytics</div>
      </Notes>
      <TaskTitle><ItemLink href={`/dashboard/analytics`}>Back</ItemLink> Task description</TaskTitle>
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
              Update item
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
