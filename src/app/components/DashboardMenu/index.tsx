"use client";
import { usePathname } from "next/navigation";
import { Aside, AsideMenu } from "./styles";
import Link from "next/link";

const DashboardMenu = () => {
  const pathname = usePathname();
  const routes = [
    { label: "Analytics", url: "/dashboard/analytics" },
    { label: "Settings", url: "/dashboard/settings" },
  ];
  return (
    <Aside>
      <AsideMenu>
        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.url}
            className={pathname.startsWith(route.url) ? "current" : ""}
          >
            {route.label}
          </Link>
        ))}
      </AsideMenu>
    </Aside>
  );
};

export default DashboardMenu;
