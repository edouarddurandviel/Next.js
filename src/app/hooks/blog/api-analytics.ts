import { Analitics } from "@app/types/types";

export async function fetchAllAnalytics({ token }: { token: string }): Promise<Analitics[]> {
  try {
    const result = await fetch(`/api/analytics`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    return result;
  } catch (e: any) {
    throw new Error(e.message);
  }
}

export async function fetchOneAnalytic(id: string): Promise<Analitics> {
  try {
    const result = await fetch(`/api/analytics/${id}`, {
      method: "GET",
    }).then((res) => res.json());
    return result;
  } catch (e: any) {
    throw new Error(e.message);
  }
}
