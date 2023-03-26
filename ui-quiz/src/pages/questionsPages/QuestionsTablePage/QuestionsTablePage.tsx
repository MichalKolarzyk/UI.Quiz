import CreateButton from "../../../components/buttons/CreateButton/CreateButton";
import GoBackButton from "../../../components/buttons/GoBackButton/GoBackButton";
import DropdownInput from "../../../components/inputs/dropdownInput/DropdownInput";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import Paginator from "../../../components/tables/paginator/Paginator";
import Table from "../../../components/tables/table/Table";
import useAppNavigation from "../../../hooks/useAppNavigation";
import classes from "./QuestionsTablePage.module.scss";
import pageClasses from '../../scss/page-base.module.scss'

const QuestionsTablePage = () => {
  const nav = useAppNavigation();

  return (
    <>
      <div className={pageClasses.page__article}>
        <header className={classes.header}>
          <div className={classes.header__title}>
            <GoBackButton onClick={() => nav.toPreviousPage()} />
            <span className="h3">Quesions</span>
          </div>
        </header>
        <section className={classes["filter-section"]}>
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
        </section>
        <section className={classes["table-section"]}>
          <Table></Table>
        </section>
      </div>
      <div className={pageClasses.page__footer}>
        <section className={classes["pagination-section"]}>
          <Paginator initialPage={8} onPageChange={() => {}} pages={20} />
        </section>
      </div>
    </>
  );
};

export default QuestionsTablePage;
