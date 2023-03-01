import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/mainpage";
import Dashboard from "../pages/dashboard";
const Routing = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route element={<Dashboard />} path="/dashboard" />
    </Routes>
  );
};
export default Routing;
