import { Routes, Route, Navigate } from "react-router-dom";
import { GenerateContentPage } from "../pages";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="generate-content" element={<GenerateContentPage />} />

      <Route path="/*" element={<Navigate to="generate-content" />} />
    </Routes>
  );
};
