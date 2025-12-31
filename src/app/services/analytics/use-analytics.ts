import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { fetchAnalytics } from "./api-analytics";

export default function analyticsHook() {

  // const { trigger, isMutating } = useSWRMutation("api/v1/analytics", fetchAnalytics, {
  //   optimisticData: current => ({ ...current, data: newData }),
  //    rollbackOnError: true
  // });
  const { data, error, isLoading, isValidating, mutate } = useSWR("api/v1/analytics", fetchAnalytics);

  return {
    isLoading,
    isValidating,
    data,
    mutate,
    error
  };
}
