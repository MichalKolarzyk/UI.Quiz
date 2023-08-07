import { useParams } from "react-router-dom";
import { CreateButton, GoBackButton, RoundedButton } from "../../components/buttons";
import useAppNavigation from "../../hooks/useAppNavigation";
import FlexRow from "../../components/flex/FlexRow";
import { useEffect, useState } from "react";
import useQuizApi from "../../apis/apiQuiz/useQuizApi";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { QuestionsTable } from "../../components/tables";
import { GapRowEnum, RowPositionEnum } from "../../components/flex/types";
import { TableLayout } from "../../layouts";
import { GetQuizResponse } from "../../apis/apiQuiz/models/GetQuiz";

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
    <TableLayout.Subpage>
      <TableLayout.Title>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <GoBackButton onClick={nav.toPreviousPage} />
          <h3>{quiz?.name ?? "Quiz"}</h3>
        </FlexRow.Container>
      </TableLayout.Title>
      <TableLayout.Action>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium} itemsPosition={RowPositionEnum.right}>
          <RoundedButton>+ Add Questions</RoundedButton>
          <CreateButton>Create session</CreateButton>
        </FlexRow.Container>
      </TableLayout.Action>
      <TableLayout.Table>
        <QuestionsTable onEditClick={() => {}}  items={quiz?.questions ?? []}/>
      </TableLayout.Table>
    </TableLayout.Subpage>
  );
};

export default QuizPage;
