import { useNavigate } from "react-router-dom";

const useAppNavigation = () => {
    const nav = useNavigate();

    const toHomePage = () => {
        nav("/home");
    }

    const toQuestionsPage = () => {
        nav("/home/questions");
    }

    const toCreateQuestionPage = () => {
        nav("/home/create-question");
    }

    const toQuestionPage = (questionId: string) => {
        nav(`/home/questions/${questionId}`);
    }

    const toLoginPage = () => {
        nav("/login")
    }

    const toRegisterPage = () => {
        nav("/register")
    }

    const toPreviousPage = () => {
        nav(-1);
    }


    return {
        toLoginPage,
        toRegisterPage,
        toHomePage,
        toQuestionsPage,
        toQuestionPage,
        toCreateQuestionPage,
        toPreviousPage,
    }
}

export default useAppNavigation;