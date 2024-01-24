import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from './Footer';

const Layout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  );
};

export default Layout;
