import { useParams } from "react-router-dom";
import TablePageLayout from "../../layouts/TablePageLayout";
import { CreateButton, GoBackButton, RoundedButton, ButtonDark } from "../../components/buttons";
import useAppNavigation from "../../hooks/useAppNavigation";
import FlexRow from "../../components/flex/FlexRow";
import { useEffect, useState } from "react";
import useQuizApi from "../../apis/apiQuiz/useQuizApi";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { GetQuizResponse } from "../../apis/apiQuiz/models/quiz";
import { QuestionsTable } from "../../components/tables";
import { GapRowEnum, RowPositionEnum } from "../../components/flex/types";

const QuizPage = () => {
  const params = useParams();
  const nav = useAppNavigation();
  const id = params["quizId"];
  const [quiz, setQuiz] = useState<GetQuizResponse>();

  const endpoint = useQuizApi(
    (request: string) => ApiQuizInstance.getQuiz(request),
    (response) => setQuiz(response.data)
  );

  useEffect(() => {
    if(id == undefined) return;
    endpoint.call(id);
  }, []);

  return (
    <TablePageLayout.Subpage>
      <TablePageLayout.TitleSection>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <GoBackButton onClick={nav.toPreviousPage} />
          <h3>{quiz?.name ?? "Quiz"}</h3>
        </FlexRow.Container>
      </TablePageLayout.TitleSection>
      <TablePageLayout.ActionSection>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium} itemsPosition={RowPositionEnum.right}>
          <RoundedButton>+ Add Questions</RoundedButton>
          <CreateButton>Create session</CreateButton>
        </FlexRow.Container>
      </TablePageLayout.ActionSection>
      <TablePageLayout.TableSection>
        <QuestionsTable onEditClick={() => {}}  items={quiz?.questions ?? []}/>
      </TablePageLayout.TableSection>
    </TablePageLayout.Subpage>
  );
};

export default QuizPage;
