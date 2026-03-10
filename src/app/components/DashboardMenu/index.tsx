"use client";
import { usePathname } from "next/navigation";
import { Aside, AsideMenu } from "./styles";
import Link from "next/link";
import { Dashboard } from "@app/routes/routes";

const DashboardMenu = () => {
  const pathname = usePathname();
  return (
    <Aside>
      <AsideMenu>
        {Dashboard.map((route, index) => (
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
