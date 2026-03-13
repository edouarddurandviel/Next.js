"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { createCacheData } from "@app/lib/storageCache";
import { useSignOutHook } from "@app/hooks/user/use-user";

const LogoutPage = () => {
  const { trigger, data, error, isMutating } = useSignOutHook();

  useEffect(() => {
    trigger();
    createCacheData(null);
    redirect("/");

  }, [trigger, data]);

  return;
};

export default LogoutPage;
