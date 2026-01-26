"use client";
import { SWRConfig } from "swr";
import StoreProvider from "./storeProvider";
import "bootstrap/dist/css/bootstrap.min.css";


const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <StoreProvider>
      <SWRConfig
        value={{
          onError: (error) => {
            // send error to database,
            // Show error messages.
            alert(error);
          }
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
