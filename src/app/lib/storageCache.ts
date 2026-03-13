export const sessionStorageProvider = (): Readonly<Map<string, object>> => {
  const map = new Map<string, object>();

  if (typeof window !== "undefined") {
    const stored = sessionStorage.getItem("session");

    if (stored) {
      try {
        const entries = JSON.parse(stored);

        if (Array.isArray(entries)) {
          for (const [key, value] of entries) {
            if (typeof key === "string") {
              map.set(key, value);
            }
          }
        }
      } catch {}
    }
  }

  return map;
};

export const createCacheData = (data: unknown) => {
  const cache = JSON.parse(sessionStorage.getItem("session") || "[]");
  const map = new Map(cache);
  map.set("session", data);
  console.log(data)
  sessionStorage.setItem("session", JSON.stringify(Array.from(map.entries())));
};
