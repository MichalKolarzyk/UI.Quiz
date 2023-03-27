import DropdownInput from "../../../components/inputs/dropdownInput/DropdownInput";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import Paginator from "../../../components/tables/paginator/Paginator";
import useAppNavigation from "../../../hooks/useAppNavigation";
import classes from "./QuestionsTablePage.module.scss";
import { CreateButton, GoBackButton } from "../../../components/buttons";
import { QuestionRow, QuestionsTable } from "../../../components/tables";
import { SubTitleSection, FooterSection, Subpage, ArticleSection, TitleSection } from "../../../layouts/PageLayout";

const QuestionsTablePage = () => {
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
  ] as Array<QuestionRow>;

  return (
    <Subpage>
      <TitleSection>
        <GoBackButton onClick={() => nav.toPreviousPage()} />
        <span className="h3">Quesions</span>
      </TitleSection>
      <SubTitleSection>
        <div className={classes["filter-section"]}>
          <div className={classes["filter-section__filters"]}>
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
          </div>
          <CreateButton onClick={() => nav.toCreateQuestionPage()}>Create Question</CreateButton>
        </div>
      </SubTitleSection>
      <ArticleSection>
        <QuestionsTable items={items} onEditClick={(item) => nav.toQuestionPage(item.id)} />
      </ArticleSection>
      <FooterSection className={classes["pagination-section"]}>
        <div className={classes["pagination"]}>
          <Paginator initialPage={8} onPageChange={() => {}} pages={20} />
        </div>
      </FooterSection>
    </Subpage>
  );
};

export default QuestionsTablePage;
