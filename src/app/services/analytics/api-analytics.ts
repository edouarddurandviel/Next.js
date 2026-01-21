import { Analitics } from "@app/types/types";

export async function fetchAllAnalytics({
  token,
}: {
  token: string;
}): Promise<Analitics[] | unknown> {
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

export async function fetchUpdateOneAnalytic(data: Analitics): Promise<Analitics> {
  try {
    const result = await fetch(`/api/analytics/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return result;
  } catch (e: any) {
    throw new Error(e.message);
  }
}

export async function fetchDeleteOneAnalytic(id: number): Promise<Analitics> {
  try {
    const result = await fetch(`/api/analytics/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    return result;
  } catch (e: any) {
    throw new Error(e.message);
  }
}
