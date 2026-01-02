import useSWR from "swr";
import { fetchAnalytics } from "./api-analytics";

export default function analyticsHook() {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "api/v1/analytics",
    fetchAnalytics,
  );

  return {
    isLoading,
    isValidating,
    data,
    mutate,
    error,
  };
}
