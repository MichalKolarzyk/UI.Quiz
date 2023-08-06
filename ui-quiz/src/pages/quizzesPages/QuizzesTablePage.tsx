import { useEffect, useState } from "react";
import { GoBackButton, CreateButton } from "../../components/buttons";
import { QuizzesTable } from "../../components/tables";
import Paginator from "../../components/tables/paginator/Paginator";
import useAppNavigation from "../../hooks/useAppNavigation";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { GetQuizzesResponse } from "../../apis/apiQuiz/models/quiz";
import { useSelector } from "react-redux";
import { referenceItemsStateSelector } from "../../reducers/referenceItems/slice";
import { Dropdown } from "../../components/dropdown";
import { TextInput } from "../../components/textInput";
import useQuizzesSearchParams from "./searchParams";
import FlexRow from "../../components/flex/FlexRow";
import { GapRowEnum, RowPositionEnum } from "../../components/flex/types";
import { TablePageLayout } from "../../layouts";

const QuizTablePage = () => {
  const nav = useAppNavigation();
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
    <TablePageLayout.Subpage>
      <TablePageLayout.Title>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <GoBackButton onClick={() => nav.toHomePage()} />
          <h3>Quizzes</h3>
        </FlexRow.Container>
      </TablePageLayout.Title>
      <TablePageLayout.Filter>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <Dropdown
            value={params.category}
            setValue={params.setCategory}
            placeholder="Select category..."
            items={categories?.map((i) => i.value)}
          />
          <TextInput onChange={params.setAuthor} placeholder="Author"></TextInput>
        </FlexRow.Container>
      </TablePageLayout.Filter>
      <TablePageLayout.Action>
        <FlexRow.Container fullHeight itemsPosition={RowPositionEnum.right}>
          <CreateButton onClick={nav.toCreateQuizPage}>Create Quiz</CreateButton>
        </FlexRow.Container>
      </TablePageLayout.Action>
      <TablePageLayout.Table>
        <QuizzesTable items={items} onEditClick={(quiz) => {nav.toQuizPage(quiz.id)}} />
      </TablePageLayout.Table>
      <TablePageLayout.Footer>
        <FlexRow.Container itemsPosition={RowPositionEnum.center}>
          <Paginator page={params.page} onPageChange={params.setPage} pages={1} />
        </FlexRow.Container>
      </TablePageLayout.Footer>
    </TablePageLayout.Subpage>
  );
};

export default QuizTablePage;
