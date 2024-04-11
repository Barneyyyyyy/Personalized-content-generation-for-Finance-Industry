import { Routes, Route } from "react-router-dom";
import { MainRoutes } from "./main/routes/MainRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainRoutes />} />
    </Routes>
  );
};
