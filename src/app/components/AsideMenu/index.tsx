import Link from 'next/link';
import { BlogMenu } from 'edouard/routes/routes';
import scss from './aside.module.scss';

const AsideMenu = () => {
  return (
    <aside className={scss.aside}>
      <div className={scss.menu}>
        <nav className={scss.nav}>
          {BlogMenu.map((route, index) => (
            <Link key={index} href={route.url}>
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default AsideMenu;
