import { Outlet } from "react-router";
import Footer from "../Components/Pages/Home/Footer";
import Navbar from "../Components/Pages/Navbar";

const NavFootLayout = () => {
  return (
    <div>
      <Navbar />
      {/* content  */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default NavFootLayout;
