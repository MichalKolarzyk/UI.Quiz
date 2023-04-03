import { GoBackButton, CreateButton } from "../../components/buttons";
import DropdownInput from "../../components/inputs/dropdownInput/DropdownInput";
import FormInput from "../../components/inputs/formInputs/FormInput";
import { QuizRow, QuizzesTable } from "../../components/tables";
import Paginator from "../../components/tables/paginator/Paginator";
import useAppNavigation from "../../hooks/useAppNavigation";
import { ActionSection, FilterSection, FooterSection, Subpage, TableSection, TitleSection } from "../../layouts/TablePageLayout";

const QuizTablePage = () => {
    const nav = useAppNavigation();
    const items = [
      {
        id: "1",
        approved: 12,
        author: "Majkel23",
        category: "Math",
        defaultLanguage: "Pl",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna sed felis condimentum",
      },
      {
        id: "2",
        approved: 12,
        author: "Majkel23",
        category: "Math",
        defaultLanguage: "Pl",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna sed felis condimentum",
      },
    ] as Array<QuizRow>;

    return (
        <Subpage>
          <TitleSection>
            <GoBackButton onClick={() => nav.toPreviousPage()} />
            <span className="h3">Quizzes</span>
          </TitleSection>
          <FilterSection>
            <DropdownInput
              labelTop="Category"
              labelBottom="chose from list..."
              items={["Math", "Geo", "IT", "Math", "Geo"]}
            />
            <FormInput placeholder="Author"></FormInput>
          </FilterSection>
          <ActionSection>
            <CreateButton>Create Quiz</CreateButton>
          </ActionSection>
          <TableSection>
            <QuizzesTable items={items} onEditClick={() => {}} />
          </TableSection>
          <FooterSection>
            <Paginator page={8} onPageChange={() => {}} pages={20} />
          </FooterSection>
        </Subpage>
      );
}

export default QuizTablePage;