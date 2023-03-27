import { useNavigate } from "react-router-dom";

const useAppNavigation = () => {
    const nav = useNavigate();
    
    const aboutUrl = "/home";
    const toHomePage = () => {
        nav(aboutUrl);
    }
    
    const questionsUrl = "/home/questions";
    const toQuestionsPage = () => {
        nav(questionsUrl);
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
    
    const quizzesUrl = "/home/quizzes";
    const toQuizzesPage= () => {
        nav(quizzesUrl)
    }
    
    const sessionsUrl = "/home/sessions";
    const toSessionsPage= () => {
        nav(sessionsUrl)
    }

    const toPreviousPage = () => {
        nav(-1);
    }


    return {
        toLoginPage,
        toRegisterPage,
        aboutUrl,
        toHomePage,
        questionsUrl,
        toQuestionsPage,
        toQuestionPage,
        toCreateQuestionPage,
        toPreviousPage,
        quizzesUrl,
        toQuizzesPage,
        sessionsUrl,
        toSessionsPage,
    }
}

export default useAppNavigation;