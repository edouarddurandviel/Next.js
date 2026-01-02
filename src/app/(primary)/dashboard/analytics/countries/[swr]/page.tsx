"use client";
import useAnalyticsHook from "@app/services/analytics/use-analytics";
import { SWRConfig } from "swr";

const AnalyticsSwrPage = ({
  params,
}: {
  params: Promise<{
    swr: string;
  }>;
}) => {
  const { data, isLoading, error } = useAnalyticsHook();

  // use a Map provider to create cache.
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <div>My personal list ====== stat detail</div>
      <div>{error && <code>{error}</code>}</div>
      <div>{isLoading && "is loading..."}</div>
      <div>
        {(data &&
          data.map((e) => (
            <div key={e.id} onClick={() => {}}>
              gender: {e.gender} - age: {e.age} - from: {e.country}
            </div>
          ))) ||
          "Loading..."}
      </div>
    </SWRConfig>
  );
};

export default AnalyticsSwrPage;
