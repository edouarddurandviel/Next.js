"use client";
import DashboardMenu from "@app/components/DashboardMenu";
import { Placeholder } from "@app/styles/template";
import { Suspense } from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <DashboardMenu />
      <Placeholder>
        <Suspense>{children}</Suspense>
      </Placeholder>
    </>
  );
};

export default DashboardLayout;
