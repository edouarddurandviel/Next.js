"use client";
import { useSelector } from "react-redux";
import HeaderMenu from "./HeaderMenu";
import { HeaderInfo } from "./styles";
import { RootState } from "@app/storeSlices";

const Header = () => {
  const { userLogin, loading } = useSelector((store: RootState) => store.user);
  return (
    <>
      <HeaderInfo>
        {(loading && "Loading...") || (userLogin && `${userLogin.user.email}`)}
      </HeaderInfo>
      <HeaderMenu />
    </>
  );
};

export default Header;
