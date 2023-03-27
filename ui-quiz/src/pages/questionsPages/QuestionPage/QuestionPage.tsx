import { useParams } from "react-router-dom";
import { GoBackButton } from "../../../components/buttons";
import useAppNavigation from "../../../hooks/useAppNavigation";
import { Subpage, TitleSection } from "../../../layouts/PageLayout";

const QuestionPage = () => {
  const params = useParams();
  const id = params["questionId"];

  const nav = useAppNavigation();

  return (
    <Subpage>
      <TitleSection>
        <GoBackButton onClick={() => nav.toPreviousPage()} />
        <span className="h3">Question</span>
      </TitleSection>
    </Subpage>
  );
};

export default QuestionPage;
