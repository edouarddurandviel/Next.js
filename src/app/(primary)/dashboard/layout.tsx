'use client';
import DashboardMenu from 'edouard/components/DashboardMenu';
import { Placeholder } from 'edouard/styles/template';
import { Suspense } from 'react';

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
