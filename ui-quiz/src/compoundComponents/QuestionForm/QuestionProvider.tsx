import { useState } from "react";
import { IQuestionState } from "./QuestionContext";
import useAppNavigation from "../../hooks/useAppNavigation";

const QuestionProvider = () : IQuestionState => {
    const [question, setQuestion] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);
    const [category, setCategory] = useState("");
    const [language, setLanguage] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [answers, setAnswers] = useState<Array<string>>(["", "", ""]);

    const nav = useAppNavigation();

    return {
        canUserEdit: false,
        isModify: false,
        question,
        setQuestion,
        isPrivate,
        setIsPrivate,
        category,
        setCategory,
        language,
        setLanguage,
        correctAnswer,
        setCorrectAnswer,
        answers,
        addAnswear: () => {},
        removeAnswear: () => {},
        setAnswear: () => {},
        save: () => {},
        isLoading: false,
        goBack: nav.toQuestionsPage,
    }
}

export default QuestionProvider;