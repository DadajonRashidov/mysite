import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Menu from "./Menu";
import Landingpage from "./Landingpage";
import Pagenotfound from "./Pagenotfound"; 
function AllComponents() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Landingpage />} />
        <Route path="home" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="*" element={<Pagenotfound />} />
      </Route>
    </Routes>
  );
}
export default AllComponents;
