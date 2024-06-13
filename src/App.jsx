import { Route, Routes } from "react-router-dom";

import Mart from "./Components/Icons/Mart";
import Profile from "./Components/Icons/Profile";
import Home from "./Components/Pages/Home/Home";

import ProductPage from "./Components/Product/ProductPage";
import About from "./Components/Pages/About";
import { urls } from "./Helpers/routes";
import NavFootLayout from "./layout/navFootLayout";
import MobileProductFilters from "./Components/Product/MobileProductFilters";
import ProductDetails from "./Components/Product/ProductDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavFootLayout />}>
          <Route path="/" element={<Home />} />

          <Route path={urls.about} element={<About />} />
          <Route path="/mart" element={<Mart />} />
          <Route path="profile/" element={<Profile />} />
          <Route path={urls.productPage} element={<ProductPage />} />
          <Route path={urls.mobilefilters} element={<MobileProductFilters />} />
          <Route path={urls.productdetails} element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
