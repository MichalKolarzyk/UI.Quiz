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
import TablePageLayout from "../../layouts/TablePageLayout";
import FlexRow, { GapRowEnum, RowPositionEnum } from "../../components/containers/FlexRow";

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
      <TablePageLayout.TitleSection>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <GoBackButton onClick={() => nav.toHomePage()} />
          <h3>Quizzes</h3>
        </FlexRow.Container>
      </TablePageLayout.TitleSection>
      <TablePageLayout.FilterSection>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <Dropdown
            value={params.category}
            setValue={params.setCategory}
            placeholder="Select category..."
            items={categories?.map((i) => i.value)}
          />
          <TextInput onChange={params.setAuthor} placeholder="Author"></TextInput>
        </FlexRow.Container>
      </TablePageLayout.FilterSection>
      <TablePageLayout.ActionSection>
        <FlexRow.Container fullHeight itemsPosition={RowPositionEnum.right}>
          <CreateButton onClick={nav.toCreateQuizPage}>Create Quiz</CreateButton>
        </FlexRow.Container>
      </TablePageLayout.ActionSection>
      <TablePageLayout.TableSection>
        <QuizzesTable items={items} onEditClick={() => {}} />
      </TablePageLayout.TableSection>
      <TablePageLayout.FooterSection>
        <FlexRow.Container itemsPosition={RowPositionEnum.center}>
          <Paginator page={params.page} onPageChange={params.setPage} pages={1} />
        </FlexRow.Container>
      </TablePageLayout.FooterSection>
    </TablePageLayout.Subpage>
  );
};

export default QuizTablePage;
