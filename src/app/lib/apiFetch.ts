import { FetchError } from "@app/types/types";

export async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
      cache: 'no-store',
      credentials: 'include',
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.") as FetchError;
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}
