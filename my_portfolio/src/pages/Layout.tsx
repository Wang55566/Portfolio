import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import {Analytics} from '@vercel/analytics/react'

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Analytics />
    </>
  );
};

export default Layout;
