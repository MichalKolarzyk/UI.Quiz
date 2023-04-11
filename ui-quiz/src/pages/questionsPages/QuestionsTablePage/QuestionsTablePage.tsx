import DropdownInput from "../../../components/inputs/dropdownInput/DropdownInput";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import Paginator from "../../../components/tables/paginator/Paginator";
import useAppNavigation from "../../../hooks/useAppNavigation";
import { CreateButton, GoBackButton } from "../../../components/buttons";
import { QuestionsTable } from "../../../components/tables";
import {
  ActionSection,
  FilterSection,
  FooterSection,
  Subpage,
  TableSection,
  TitleSection,
} from "../../../layouts/TablePageLayout";
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

const QuestionsTablePage = () => {
  const nav = useAppNavigation();
  const { questions, questionsCount } = useSelector(questionStateSelector);
  const { categories } = useSelector(referenceItemsStateSelector);
  const searchParams = useQuestionsSearchParams();
  const appDispatch = useAppDispatch();
  const items = questions ?? [];
  
  const onIsPrivateChange = (newState: boolean) => {
    if(searchParams.isPrivate != newState){
      searchParams.setPage(1);
    }
    searchParams.setIsPrivate(newState);
  }

  const take = 5;
  const skip = (searchParams.page - 1) * take;
  const count = questionsCount ?? 0
  const questionPagesCount = Math.floor(count / take) + (count % take > 0 ? 1 : 0) ;

  useEffect(() => {
    appDispatch(
      getQuestions({
        isPrivate: searchParams.isPrivate,
        skip: skip,
        take: take,
        author: searchParams.author == "" ? null : searchParams.author,
        category: searchParams.category== "" ? null : searchParams.category,
      })
    );
  }, [searchParams.isPrivate, searchParams.page, searchParams.author, searchParams.category]);


  return (
    <Subpage>
      <TitleSection>
        <GoBackButton onClick={() => nav.toPreviousPage()} />
        <h3>Quesions</h3>
      </TitleSection>
      <FilterSection>
        <Dropdown placeholder="Select category..." value={searchParams.category} setValue={(value) => {searchParams.setCategory(value); searchParams.setPage(1);}} items={categories?.map(c => c.value)}/>
        <Dropdown placeholder="Select language..."/>
        <TextInput delay={300} value={searchParams.author} onChange={(value) => {searchParams.setAuthor(value); searchParams.setPage(1);}} placeholder="Author"></TextInput>
        <Switch value={searchParams.isPrivate} onChange={onIsPrivateChange} label="IsPrivate"></Switch>
      </FilterSection>
      <ActionSection>
        <CreateButton onClick={() => nav.toCreateQuestionPage()}>Create Question</CreateButton>
      </ActionSection>
      <TableSection>
        <QuestionsTable skip={skip} items={items} onEditClick={(item) => nav.toQuestionPage(item.id)} />
      </TableSection>
      <FooterSection>
        <Paginator page={searchParams.page} onPageChange={searchParams.setPage} pages={questionPagesCount} />
      </FooterSection>
    </Subpage>
  );
};

export default QuestionsTablePage;
