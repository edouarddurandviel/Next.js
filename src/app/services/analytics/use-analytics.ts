import useSWR from "swr";
import {
  fetchAllAnalytics,
  fetchOneAnalytic,
  fetchUpdateOneAnalytic,
  fetchDeleteOneAnalytic,
} from "./api-analytics";
import { Analitics } from "@app/types/types";

// HOOKS
/////////
export function useAllAnalyticsHook() {
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
  const { data, error, isLoading, isValidating, mutate } = useSWR("api/analytics", () =>
    fetchOneAnalytic(params),
  );

  const updateAnalytic = async (data: Analitics) => {
    await fetchUpdateOneAnalytic(data);
  };

  const deleteAnalytic = async (id: number) => {
    await fetchDeleteOneAnalytic(id);
  };

  return {
    isLoading,
    isValidating,
    analytics: data,
    mutate,
    updateAnalytic: async (newData: Analitics) => {
      await updateAnalytic(newData);
      const updatedData = { ...data, ...newData };
      mutate(updatedData as Analitics);
    },
    deleteAnalytic: async (id: number) => {
      await deleteAnalytic(id);
      mutate();
    },
    error,
  };
}
