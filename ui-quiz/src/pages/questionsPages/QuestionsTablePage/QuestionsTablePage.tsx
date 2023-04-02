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
import QuestionTableLoader from "../../../components/loaders/QuestionTableLoader";
import { useSelector } from "react-redux";
import { questionStateSelector } from "../../../reducers/questionReducers/selectors";
import { useAppDispatch } from "../../../store/store";
import { setFilter } from "../../../reducers/questionReducers/slice";
import Switch from "../../../components/switches/Switch";

const QuestionsTablePage = () => {
  const nav = useAppNavigation();
  const {questions, questionsFilter, questionsPagesCount} = useSelector(questionStateSelector);

  const appDispatch = useAppDispatch();
  const items = questions ?? [];

  const onPageChangeHandler = (newPage: number) => {
    appDispatch(setFilter({
      ...questionsFilter,
       skip: (newPage - 1) * 5,
    }))
  }

  const onPrivateChange = (newState: boolean) => {
    appDispatch(setFilter({
      ...questionsFilter,
       isPrivate: newState,
       skip:0,
    }))
  }
  return (
    <QuestionTableLoader>
      <Subpage>
        <TitleSection>
          <GoBackButton onClick={() => nav.toPreviousPage()} />
          <span className="h3">Quesions</span>
        </TitleSection>
        <FilterSection>
          <DropdownInput
            labelTop="Category"
            labelBottom="chose from list..."
            items={["Math", "Geo", "IT", "Math", "Geo"]}
          />
          <DropdownInput
            labelTop="State"
            labelBottom="chose from list..."
            items={["Math", "Geo", "IT", "Math", "Geo"]}
          />
          <FormInput placeholder="Author"></FormInput>
          <Switch value={questionsFilter.isPrivate} onChange={onPrivateChange} label="IsPrivate"></Switch>
        </FilterSection>
        <ActionSection>
          <CreateButton onClick={() => nav.toCreateQuestionPage()}>Create Question</CreateButton>
        </ActionSection>
        <TableSection>
          <QuestionsTable items={items} onEditClick={(item) => nav.toQuestionPage(item.id)} />
        </TableSection>
        <FooterSection>
          <Paginator initialPage={1} onPageChange={onPageChangeHandler} pages={questionsPagesCount}/>
        </FooterSection>
      </Subpage>
    </QuestionTableLoader>
  );
};

export default QuestionsTablePage;
