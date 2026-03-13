import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MenuHeader, MainMenu, LoggoutButton } from "./styles";
import { useSignOutHook } from "@app/hooks/user/use-user";
import { createCacheData } from "@app/lib/storageCache";

const HeaderMenu = () => {
  const { trigger, error, isMutating } = useSignOutHook();
  const router = useRouter()
  

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

        <LoggoutButton onClick={async () => {
            const data = await trigger()
            console.log(data)
            if(data.user) createCacheData(data.user)
            if(!data.error) router.push("/")
          }}
        >{isMutating ? 'Loging out...' : error ? 'Try again' : 'Logout'}</LoggoutButton>
       
      </MenuHeader>
    </MainMenu>
  );
};

export default HeaderMenu;
