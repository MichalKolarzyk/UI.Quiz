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
import { useEffect } from "react";
import { getQuestions } from "../../../reducers/questionReducers/asyncActions";
import { useQuestionsSearchParams } from "./searchParams";

const QuestionsTablePage = () => {
  const nav = useAppNavigation();
  const { questions, questionsCount } = useSelector(questionStateSelector);
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
      })
    );
  }, [searchParams.isPrivate, searchParams.page]);


  return (
    <Subpage>
      <TitleSection>
        <GoBackButton onClick={() => nav.toPreviousPage()} />
        <h3>Quesions</h3>
      </TitleSection>
      <FilterSection>
        <DropdownInput
          labelTop="Category"
          labelBottom="chose from list..."
          items={["Math", "Geo", "IT", "Math", "Geo"]}
        />
        <DropdownInput labelTop="State" labelBottom="chose from list..." items={["Math", "Geo", "IT", "Math", "Geo"]} />
        <FormInput placeholder="Author"></FormInput>
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
