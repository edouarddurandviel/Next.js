export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const result = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      ...options,
    }).then((res) => res.json());

    return result;
  } catch (e: any) {
    return e.message;
  }
}
