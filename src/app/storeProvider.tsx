"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";
//import { initializeCount } from './storeSlices'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    //storeRef.current.dispatch(initializeUser(user))
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
