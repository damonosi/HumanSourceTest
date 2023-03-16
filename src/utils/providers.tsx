"use client";
import { ThemeProvider } from "@material-tailwind/react";

import "../globals.css";
interface IProviders {
  children: JSX.Element | JSX.Element[];
}

const Providers = ({ children }: IProviders) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default Providers;
