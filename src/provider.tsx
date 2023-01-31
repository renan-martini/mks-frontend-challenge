"use client";
import { Provider } from "react-redux";
import { IChildren } from "./interfaces";
import { store } from "./store/store";

export function Providers({ children }: IChildren) {
  return <Provider store={store}>{children}</Provider>;
}
