import DropdownInput from "../../../components/inputs/dropdownInput/DropdownInput";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import Paginator from "../../../components/tables/paginator/Paginator";
import useAppNavigation from "../../../hooks/useAppNavigation";
import { CreateButton, GoBackButton } from "../../../components/buttons";
import { QuestionRow, QuestionsTable } from "../../../components/tables";
import {
  ActionSection,
  FilterSection,
  FooterSection,
  Subpage,
  TableSection,
  TitleSection,
} from "../../../layouts/TablePageLayout";

const QuestionsTablePage = () => {
  const nav = useAppNavigation();

  const items = [
    {
      id: "7b01b63d-cd6c-4f05-b479-4ce63bbf1f21",
      approved: 12,
      author: "Majkel23",
      category: "Math",
      defaultLanguage: "Pl",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna sed felis condimentum",
    },
    {
      id: "09fba225-58bf-4b06-8d3f-82fd7cb33fc3",
      approved: 12,
      author: "Majkel23",
      category: "Math",
      defaultLanguage: "Pl",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna sed felis condimentum",
    },
  ] as Array<QuestionRow>;

  return (
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
        <DropdownInput labelTop="State" labelBottom="chose from list..." items={["Math", "Geo", "IT", "Math", "Geo"]} />
        <FormInput placeholder="Author"></FormInput>
      </FilterSection>
      <ActionSection>
        <CreateButton onClick={() => nav.toCreateQuestionPage()}>Create Question</CreateButton>
      </ActionSection>
      <TableSection>
        <QuestionsTable items={items} onEditClick={(item) => nav.toQuestionPage(item.id)} />
      </TableSection>
      <FooterSection>
        <Paginator initialPage={8} onPageChange={() => {}} pages={20} />
      </FooterSection>
    </Subpage>
  );
};

export default QuestionsTablePage;
