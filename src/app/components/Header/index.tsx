import scss from "./header.module.scss";
import HeaderMenu from "./HeaderMenu";


const Header = () => {
  return (
    <div className={scss.HeaderApi}>
      <HeaderMenu />
    </div>
  );
};

export default Header;
