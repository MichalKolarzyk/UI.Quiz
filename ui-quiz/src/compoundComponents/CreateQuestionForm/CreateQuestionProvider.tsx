import { useState } from "react";
import { ICreateQuestionState } from "./CreateQuestionContext";
import { useSelector } from "react-redux";
import { referenceItemsStateSelector } from "../../reducers/referenceItems/slice";
import useAppNavigation from "../Navigation/useAppNavigation";
import { useNotifications } from "../Notifications/hooks";
import useList from "../../hooks/useList";
import QuizApiRequests from "../../apis/apiQuiz";

const CreateQuestionProvider = (): ICreateQuestionState => {
  const notify = useNotifications();
  const nav = useAppNavigation();

  const [question, setQuestion] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const answers = useList([""]);

  const { categories } = useSelector(referenceItemsStateSelector);
  const categoryItems = categories?.map?.((c) => c.value) ?? [];

  const removeAnswear = (index: number) => {
    answers.remove(index);
    if (index < correctAnswer) {
      setCorrectAnswer(correctAnswer - 1);
      return;
    }
    if (index == correctAnswer) {
      setCorrectAnswer(-1);
      return;
    }
  };

  const getIsModify = () => {
    if (
      isPrivate == false &&
      correctAnswer == 0 &&
      question == "" &&
      category == "" &&
      answers.items.every((e) => e == "")
    ) {
      return false;
    }
    return true;
  };

  const createQuestionRequest = QuizApiRequests.useCreateQuestionRequest(
    (data) => {
      notify.addInfo("Question created");
      nav.toQuestionPage(data.id);
    },
    () => notify.addError("Some informations are invalid")
  );

  const createQuestion = () => {
    createQuestionRequest.call({
      answers: answers.items,
      category: category,
      correctAnswerIndex: correctAnswer,
      defaultLanugage: "",
      isPrivate: isPrivate,
      question: question,
    });
  };

  const goBack = () => {
    nav.toQuestionsPage();
  };

  return {
    isModify: getIsModify(),
    question,
    setQuestion,
    questionError: createQuestionRequest.fieldErrors?.description,
    isPrivate,
    setIsPrivate,
    category,
    setCategory,
    categoryError: createQuestionRequest.fieldErrors?.category,
    language,
    setLanguage,
    correctAnswer,
    setCorrectAnswer,
    correctAnswerError: createQuestionRequest.fieldErrors?.correctAnswerIndex,
    answers: answers.items,
    addAnswear: () => answers.add(""),
    removeAnswear,
    createQuestion,
    answersError: createQuestionRequest.fieldErrors?.answers,
    setAnswear: answers.setItem,
    isLoading: createQuestionRequest.isLoading,
    categoryItems,
    goBack,
  };
};

export default CreateQuestionProvider;
