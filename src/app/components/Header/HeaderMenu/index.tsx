import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuHeader, MainMenu } from "./styles";

const HeaderMenu = () => {
  const pathName = usePathname();
  const currentPath = (path: string) => {
    return pathName.startsWith(path) ? "current" : "";
  };
  return (
    <MainMenu>
      <MenuHeader>
        <Link key={1} href="/" className={currentPath("/")}>
          Home
        </Link>

        <Link key={2} href="/blog" className={currentPath("/blog")}>
          Blog
        </Link>

        <Link key={3} href="/dashboard" className={currentPath("/dashboard")}>
          Dashboard
        </Link>

        <Link key={5} href="/signup" className={currentPath("/signup")}>
          Create account
        </Link>

        <Link key={4} href="/login" className={currentPath("/login")}>
          Login
        </Link>

        <Link key={6} href="/logout" className={currentPath("/logout")}>
          Logout
        </Link>
      </MenuHeader>
    </MainMenu>
  );
};

export default HeaderMenu;
