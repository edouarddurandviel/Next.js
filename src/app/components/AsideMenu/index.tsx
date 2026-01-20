import { BlogMenu } from "@app/routes/routes";
import { AsideLink, AsideNav, AsidePlaceholder } from "./styles";

const AsideMenu = () => {
  return (
    <AsidePlaceholder>
      <AsideNav>
        {BlogMenu.map((route, index) => (
          <AsideLink key={index} href={route.url}>
            {route.label}
          </AsideLink>
        ))}
      </AsideNav>
    </AsidePlaceholder>
  );
};

export default AsideMenu;
