"use client";
import { useSelector } from "react-redux";
import HeaderMenu from "./HeaderMenu";
import { HeaderInfo } from "./styles";
import { RootState } from "@app/store";
import Modal from "../Modal";


const Header = () => {
  const { userLogin, loading } = useSelector((store: RootState) => store.user);
  const { events } = useSelector((store: RootState) => store.events);
 
  return (
    <>
      {events && events.modal && <Modal>form</Modal>}
      <HeaderInfo>
        {
          (loading && "Loading...") || 
          (userLogin && userLogin.user.email !== undefined && `${userLogin.user.email}`)
        }
      </HeaderInfo>
      <HeaderMenu />
    </>
  );
};

export default Header;
