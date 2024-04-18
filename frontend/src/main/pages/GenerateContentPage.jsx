import { ContentLayout } from "../layout/ContentLayout";
import { ContentView } from "../views/ContentView";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { useSelector } from "react-redux";

export const GenerateContentPage = () => {
  const { active } = useSelector((state) => state.params);

  return (
    <ContentLayout>
      {active ? <ContentView /> : <NothingSelectedView />}
    </ContentLayout>
  );
};
