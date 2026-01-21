"use client";
import { useAppDispatch } from "@app/store/hooks";
import { logout } from "@app/store/user/thunks";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { resetAction } from "@app/actions";

const LogoutPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetAction());
    dispatch(logout());
    redirect("/");
  }, [dispatch, redirect]);

  return;
};

export default LogoutPage;
