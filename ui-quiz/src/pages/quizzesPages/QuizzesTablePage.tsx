import { useEffect, useState } from "react";
import { GoBackButton, CreateButton, SecondaryButton } from "../../components/buttons";
import { QuizzesTable } from "../../components/tables";
import Paginator from "../../components/tables/paginator/Paginator";
import useAppNavigation from "../../compoundComponents/Navigation/useAppNavigation";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { useSelector } from "react-redux";
import { referenceItemsStateSelector } from "../../reducers/referenceItems/slice";
import { Dropdown } from "../../components/dropdown";
import { TextInput } from "../../components/inputs/textInput";
import useQuizzesSearchParams from "./searchParams";
import FlexRow from "../../components/flex/FlexRow";
import { GapRowEnum, RowPositionEnum } from "../../components/flex/types";
import { TableLayout } from "../../layouts";
import usePrompt from "../../compoundComponents/Prompt/hooks";
import CreateQuizPage from "../createQuizPages/CreateQuizPage";
import { GetQuizzesResponse } from "../../apis/apiQuiz/models/GetQuizzes";

const QuizTablePage = () => {
  const nav = useAppNavigation();
  const prompt = usePrompt();
  const [quizResponse, setQuizResponse] = useState<GetQuizzesResponse>();
  const { categories } = useSelector(referenceItemsStateSelector);
  const params = useQuizzesSearchParams();

  useEffect(() => {
    ApiQuizInstance.getQuizzes({
      author: null,
      category: null,
      skip: 0,
      take: 7,
    }).then((r) => {
      setQuizResponse(r.data);
    });
  }, [params.author, params.category, params.page]);

  const items = quizResponse?.quizes;

  return (
    <TableLayout.Subpage>
      <TableLayout.Title>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <GoBackButton onClick={() => nav.toHomePage()} />
          <h3>Quizzes</h3>
        </FlexRow.Container>
      </TableLayout.Title>
      <TableLayout.Filter>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <Dropdown
            value={params.category ?? undefined}
            onChange={(value) => params.setCategory(value ?? "")}
            placeholder="Select category..."
            items={categories?.map((i) => i.value)}
          />
          <TextInput onChange={params.setAuthor} placeholder="Author"></TextInput>
        </FlexRow.Container>
      </TableLayout.Filter>
      <TableLayout.Action>
        <FlexRow.Container fullHeight itemsPosition={RowPositionEnum.right}>
          <SecondaryButton onClick={() => prompt.show("Create quiz", CreateQuizPage)} label="Create Quiz"/>
        </FlexRow.Container>
      </TableLayout.Action>
      <TableLayout.Table>
        <QuizzesTable
          items={items}
          onEditClick={(quiz) => {
            nav.toQuizPage(quiz.id);
          }}
        />
      </TableLayout.Table>
      <TableLayout.Footer>
        <FlexRow.Container itemsPosition={RowPositionEnum.center}>
          <Paginator page={params.page} onPageChange={params.setPage} pages={1} />
        </FlexRow.Container>
      </TableLayout.Footer>
    </TableLayout.Subpage>
  );
};

export default QuizTablePage;
