import { apiFetch } from "@app/lib/apiFetch";
import { Analitics } from "@app/types/types";

export async function fetchAllAnalytics({ token }: { token: string }): Promise<Analitics[]> {
  const res = await apiFetch<Analitics[]>(`/api/analytics`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
}

export async function fetchOneAnalytic(id: string): Promise<Analitics> {
  const res = await apiFetch<Analitics>(`/api/analytics/${id}`, {
    method: "GET",
  });

  return res;
}

export async function fetchUpdateOneAnalytic(data: Analitics): Promise<Analitics> {
  const res = await apiFetch<Analitics>(`/api/analytics/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res;
}

export async function fetchDeleteOneAnalytic(id: number): Promise<Analitics> {
  const res = await apiFetch<Analitics>(`/api/analytics/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return res;
}
