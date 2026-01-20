import useSWR from "swr";
import { fetchAllAnalytics, fetchOneAnalytic } from "./api-analytics";

export function useAnalyticsHook() {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "api/analytics",
    fetchAllAnalytics,
  );

  return {
    isLoading,
    isValidating,
    data,
    mutate,
    error,
  };
}

export function useOneAnalyticHook(params: string) {
  const { data, error, isLoading, isValidating, mutate } = useSWR(`api/analytics/${params}`, () =>
    fetchOneAnalytic(params),
  );

  return {
    isLoading,
    isValidating,
    data,
    mutate,
    error,
  };
}
