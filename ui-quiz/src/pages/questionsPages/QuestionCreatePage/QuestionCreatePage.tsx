import GoBackButton from "../../../components/buttons/GoBackButton/GoBackButton";
import useAppNavigation from "../../../hooks/useAppNavigation";
import classes from "./QuestionCreatePage.module.scss";

const QuestionCreatePage = () => {
    const nav = useAppNavigation();

    return <div className={classes.page}>
        <header className={classes.header}>
            <div className={classes.header__title}>
                <GoBackButton onClick={() => nav.toPreviousPage()}/>
                <span className="h3">Create Question</span>
            </div>
        </header>
        <section>
            
        </section>
    </div>
}

export default QuestionCreatePage;