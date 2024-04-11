import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { AppTheme } from "./theme";

const ContentGenerationApp = () => {
  return (
    <BrowserRouter>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </BrowserRouter>
  );
};

export default ContentGenerationApp;
