import { useEffect, useState } from "react";
import { ICreateQuestionState } from "./CreateQuestionContext";
import useQuizApi from "../../apis/apiQuiz/useQuizApi";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { CreateQuestionRequest, CreateQuestionResponse } from "../../apis/apiQuiz/ApiQuizModels";
import { QuestionError } from "../../reducers/questionReducers/slice";
import { useSelector } from "react-redux";
import { referenceItemsStateSelector } from "../../reducers/referenceItems/slice";
import useAppNavigation from "../../hooks/useAppNavigation";
import { useNotifications } from "../../notifications/hooks";

const CreateQuestionProvider = (): ICreateQuestionState => {
  const notify = useNotifications();
  const nav = useAppNavigation();

  const [question, setQuestion] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);
  const [isModify, setIsModify] = useState(false);
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [answers, setAnswers] = useState([""]);

  useEffect(() => {
    if (isPrivate == false && correctAnswer == 0 && question == "" && category == "" && answers.every((e) => e == "")) {
      setIsModify(false);
    } else {
      setIsModify(true);
    }
  }, [isPrivate, correctAnswer, question, category, answers]);

  const { categories } = useSelector(referenceItemsStateSelector);
  const categoryItems = categories?.map?.((c) => c.value) ?? [];

  const removeAnswear = (index: number) => {
    answers.splice(index, 1);
    setAnswers([...answers]);
    if (index < correctAnswer) {
      setCorrectAnswer(correctAnswer - 1);
      return;
    }
    if (index == correctAnswer) {
      setCorrectAnswer(-1);
      return;
    }
  };

  const addAnswear = () => {
    const newAnswers = [...answers, ""];
    setAnswers(newAnswers);
  };

  const endpoint = useQuizApi<CreateQuestionRequest, CreateQuestionResponse, QuestionError>(
    (request) => ApiQuizInstance.createQuestion(request),
    () => notify.addInfo("Question created"),
    () => notify.addError("Some informations are invalid")
  );

  const createQuestion = () => {
    const request = {
      answers: answers,
      category: category,
      correctAnswerIndex: correctAnswer,
      defaultLanugage: "",
      isPrivate: isPrivate,
      question: question,
    } as CreateQuestionRequest;

    endpoint.call(request);
  };

  const setAnswear = (newValue: string, index: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = newValue;
    setAnswers([...newAnswers]);
  };

  const goBack = () => {
    nav.toQuestionsPage();
  }


  return {
    isModify,
    question,
    setQuestion,
    questionError: endpoint.errors.erros?.description,
    isPrivate,
    setIsPrivate,
    category,
    setCategory,
    categoryError: endpoint.errors.erros?.category,
    language,
    setLanguage,
    correctAnswer,
    setCorrectAnswer,
    answers,
    addAnswear,
    removeAnswear,
    createQuestion,
    setAnswear, 
    isLoading: endpoint.isLoading,
    categoryItems,
    goBack,
  };
};

export default CreateQuestionProvider;
