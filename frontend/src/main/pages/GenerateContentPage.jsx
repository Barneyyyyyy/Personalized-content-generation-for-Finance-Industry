import { ContentLayout } from "../layout/ContentLayout";
import { ContentView } from "../views/ContentView";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { Typography } from "@mui/material";

export const GenerateContentPage = () => {
  return (
    <ContentLayout>
      {/* <NothingSelectedView /> */}
      <ContentView />
    </ContentLayout>
  );
};
