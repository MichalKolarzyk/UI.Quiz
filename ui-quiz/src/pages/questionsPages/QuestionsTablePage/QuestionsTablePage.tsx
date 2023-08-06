import Paginator from "../../../components/tables/paginator/Paginator";
import useAppNavigation from "../../../hooks/useAppNavigation";
import { CreateButton, GoBackButton } from "../../../components/buttons";
import { QuestionsTable } from "../../../components/tables";
import { useSelector } from "react-redux";
import { questionStateSelector } from "../../../reducers/questionReducers/selectors";
import { useAppDispatch } from "../../../store/store";
import Switch from "../../../components/switches/Switch";
import { useEffect, useState } from "react";
import { getQuestions } from "../../../reducers/questionReducers/asyncActions";
import { useQuestionsSearchParams } from "./searchParams";
import { TextInput } from "../../../components/textInput";
import { Dropdown } from "../../../components/dropdown";
import { referenceItemsStateSelector } from "../../../reducers/referenceItems/slice";
import TablePageLayout from "../../../layouts/TablePageLayout";
import FlexRow from "../../../components/flex/FlexRow";
import { GapRowEnum, RowPositionEnum } from "../../../components/flex/types";

const QuestionsTablePage = () => {
  const nav = useAppNavigation();
  const { questions, questionsCount } = useSelector(questionStateSelector);
  const { categories } = useSelector(referenceItemsStateSelector);
  const searchParams = useQuestionsSearchParams();
  const appDispatch = useAppDispatch();
  const items = questions ?? [];

  const onIsPrivateChange = (newState: boolean) => {
    if (searchParams.isPrivate != newState) {
      searchParams.setPage(1);
    }
    searchParams.setIsPrivate(newState);
  };

  const take = 7;
  const skip = (searchParams.page - 1) * take;
  const count = questionsCount ?? 0;
  const questionPagesCount = Math.floor(count / take) + (count % take > 0 ? 1 : 0);

  useEffect(() => {
    appDispatch(
      getQuestions({
        isPrivate: searchParams.isPrivate,
        skip: skip,
        take: take,
        author: searchParams.author == "" ? null : searchParams.author,
        category: searchParams.category == "" ? null : searchParams.category,
      })
    );
  }, [searchParams.isPrivate, searchParams.page, searchParams.author, searchParams.category]);

  return (
    <TablePageLayout.Subpage>
      <TablePageLayout.TitleSection>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <GoBackButton onClick={() => nav.toHomePage()} />
          <h3>Quesions</h3>
        </FlexRow.Container>
      </TablePageLayout.TitleSection>
      <TablePageLayout.FilterSection>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <Dropdown
            placeholder="Select category..."
            value={searchParams.category}
            setValue={(value) => {
              searchParams.setCategory(value);
              searchParams.setPage(1);
            }}
            items={categories?.map((c) => c.value)}
          />
          <Dropdown placeholder="Select language..." />
          <TextInput
            value={searchParams.author}
            onChange={(value) => {
              searchParams.setAuthor(value);
              searchParams.setPage(1);
            }}
            placeholder="Author"
          ></TextInput>
          <Switch value={searchParams.isPrivate} onChange={onIsPrivateChange} label="IsPrivate"></Switch>
        </FlexRow.Container>
      </TablePageLayout.FilterSection>
      <TablePageLayout.ActionSection>
        <FlexRow.Container fullHeight itemsPosition={RowPositionEnum.right}>
          <CreateButton onClick={() => nav.toCreateQuestionPage()}>Create Question</CreateButton>
        </FlexRow.Container>
      </TablePageLayout.ActionSection>
      <TablePageLayout.TableSection>
        <QuestionsTable skip={skip} items={items} onEditClick={(item) => nav.toQuestionPage(item.id)} />
      </TablePageLayout.TableSection>
      <TablePageLayout.FooterSection>
        <FlexRow.Container itemsPosition={RowPositionEnum.center}>
          <Paginator page={searchParams.page} onPageChange={searchParams.setPage} pages={questionPagesCount} />
        </FlexRow.Container>
      </TablePageLayout.FooterSection>
    </TablePageLayout.Subpage>
  );
};

export default QuestionsTablePage;
