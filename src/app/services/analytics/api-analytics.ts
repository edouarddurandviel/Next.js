import { Statistiques } from "@app/types/types";

export async function fetchAnalytics({
  swrParam,
  token,
}: {
  swrParam: string;
  token: string;
}): Promise<Statistiques[]> {
  try {
    const result = fetch(`/api/v1/analytics/${swrParam}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    return result;
  } catch (e) {
    throw new Error("Not authorized!");
  }
}
