"use client";
import { RecoilRoot } from "recoil";

const Providers = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Providers;
