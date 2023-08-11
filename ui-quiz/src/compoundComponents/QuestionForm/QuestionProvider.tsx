import { useEffect, useState } from "react";
import { IQuestionState } from "./QuestionContext";
import useAppNavigation from "../Navigation/useAppNavigation";
import useList from "../../hooks/useList";
import QuizApiRequests from "../../apis/apiQuiz";
import { useParams } from "react-router-dom";
import { useNotifications } from "../Notifications/hooks";
import { GetQuestionResponse } from "../../apis/apiQuiz/models/GetQuestion";

const QuestionProvider = (): IQuestionState => {
  const notify = useNotifications();

  const [question, setQuestion] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [canUserEdit, setCanUserEdit] = useState(false);

  const [oryginalQuestion, setOryginalQuestion] = useState<GetQuestionResponse>();
  const answers = useList([""]);

  const params = useParams();
  const questionId = params["questionId"];

  const getQuestionRequest = QuizApiRequests.useGetQuestionById((question) => {
    setIsPrivate(question.isPrivate);
    setCorrectAnswer(question.correctAnswerIndex);
    setQuestion(question.description);
    setCategory(question.category);
    answers.setItems(question.answers);
    setCanUserEdit(question.canUserEdit);
    setOryginalQuestion(question);
  });

  const getIsModify = () => {
    if (
      isPrivate == oryginalQuestion?.isPrivate &&
      correctAnswer == oryginalQuestion.correctAnswerIndex &&
      question == oryginalQuestion.description &&
      category == oryginalQuestion.category &&
      answers.items.length == oryginalQuestion.answers.length
    ) {
      return false;
    }
    return true;
  };

  const updateQuestionRequest = QuizApiRequests.useUpdateQuestion(
    () => notify.addInfo("Question updated"),
    () => notify.addError("Not all values are valid")
  );

  useEffect(() => {
    if (question === undefined) return;
    getQuestionRequest.call(questionId ?? "");
  }, []);

  const save = () => {
    updateQuestionRequest.call({
      answers: answers.items,
      category: category,
      correctAnswerIndex: correctAnswer,
      defaultLanugage: "",
      id: questionId ?? "",
      isPrivate: isPrivate,
      question: question,
    });
  };

  const removeAnswer = (index: number) => {
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

  const nav = useAppNavigation();

  return {
    canUserEdit,
    isModify: getIsModify(),
    question,
    setQuestion,
    questionError: updateQuestionRequest.fieldErrors?.description,
    isPrivate,
    setIsPrivate,
    category,
    setCategory,
    categoryError: updateQuestionRequest.fieldErrors?.category,
    language,
    setLanguage,
    correctAnswer,
    setCorrectAnswer,
    correctAnswerError: updateQuestionRequest.fieldErrors?.correctAnswerIndex,
    answers: answers.items,
    addAnswear: () => answers.add(""),
    removeAnswear: removeAnswer,
    setAnswear: answers.setItem,
    answersError: updateQuestionRequest.fieldErrors?.answers,
    save,
    isLoading: updateQuestionRequest.isLoading || getQuestionRequest.isLoading,
    goBack: nav.toQuestionsPage,
  };
};

export default QuestionProvider;
