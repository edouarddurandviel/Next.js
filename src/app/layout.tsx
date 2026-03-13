"use client";
import { SWRConfig, useSWRConfig } from "swr";
import StoreProvider from "./storeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { sessionStorageProvider } from "./lib/storageCache";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [provider] = useState<Map<string, object>>(() => sessionStorageProvider());
  const { cache } = useSWRConfig();

  useEffect(() => {
    console.log(cache);
  });

  return (
    <StoreProvider>
      <SWRConfig
        value={{
          provider: () => provider,
          onError: (error) => {
            // send error to database,
            // Show error messages.
            alert(error);
          },
        }}
      >
        <html lang="en">
          <body>{children}</body>
        </html>
      </SWRConfig>
    </StoreProvider>
  );
};

export default RootLayout;
