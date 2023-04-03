import { ChangeEvent, useEffect, useState } from "react";
import DropdownInput from "../../../components/inputs/dropdownInput/DropdownInput";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import Textarea from "../../../components/inputs/textarea/Textarea";
import WindowUnloadListener from "../../../components/listeners/WindowUnloadListener";
import Switch from "../../../components/switches/Switch";
import useAppNavigation from "../../../hooks/useAppNavigation";
import classes from "./QuestionCreatePage.module.scss";
import { CancelButton, CreateButton, DeleteButton, GoBackButton, RoundedButton } from "../../../components/buttons";
import {
  AnswerSection,
  FooterSection,
  QuestionSection,
  Subpage,
  TitleSection,
} from "../../../layouts/QuestionPageLayout";
import { useAppDispatch } from "../../../store/store";
import { createQuestion } from "../../../reducers/questionReducers/asyncActions";
import { CreateQuestionRequest } from "../../../apis/apiQuiz/ApiQuizModels";
import { useSelector } from "react-redux";
import { questionStateSelector } from "../../../reducers/questionReducers/selectors";
import ErrorMessage from "../../../components/errors/ErrorMessage";
import { AppNotificationType, useNotifications } from "../../../notifications";
import { ActionState } from "../../../reducers";
import { Await } from "react-router-dom";
import ApiQuizInstance from "../../../apis/apiQuiz/ApiQuizInstance";
import { QuestionError } from "../../../reducers/questionReducers/slice";

const QuestionCreatePage = () => {
  const [isModify, setIsModify] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [answers, setAnswers] = useState<Array<string>>(["", "", ""]);

  const nav = useAppNavigation();
  const dispatch = useAppDispatch();
  //const { error } = useSelector(questionStateSelector);
  const [error, setError] = useState<QuestionError>({
    answers: "",
    correctAnswerIndex: "",
    question: "",
  });
  const notify = useNotifications();

  const answerChangeHandler = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers([...newAnswers]);
  };

  useEffect(() => {
    if (isPrivate == false && correctAnswer == 0 && question == "" && category == "" && answers.every((e) => e == "")) {
      setIsModify(false);
    } else {
      setIsModify(true);
    }
  }, [isPrivate, correctAnswer, question, category, answers]);

  const correctAnswerChangeHandler = (index: number, value: boolean) => {
    setCorrectAnswer(index);
  };

  const onCreateQuestionClickHandler = () => {
    const request = {
      answers: answers,
      category: category,
      correctAnswerIndex: correctAnswer,
      defaultLanugage: "",
      isPrivate: isPrivate,
      question: question,
    } as CreateQuestionRequest;

    ApiQuizInstance.createQuestion(request)
      .then(() => {
        notify.add({ message: "Question created", type: AppNotificationType.correct });
      })
      .catch((reason) => {
        notify.add({ message: "Some informations are invalid", type: AppNotificationType.error });
        setError({
          answers: reason.response.data.errors["Answers"] ?? "",
          correctAnswerIndex: reason.response.data.errors["CorrectAnswerIndex"] ?? "",
          question: reason.response.data.errors["Description"] ?? "",
        });
      })
      .finally(() => {
      });
  };

  const deleteAnswer = (index: number) => {
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

  const addAnswer = () => {
    const newAnswers = [...answers, ""];
    setAnswers(newAnswers);
  };

  const goBackClickHandler = () => {
    nav.toPreviousPage();
  };

  const onCancelHandler = () => {
    nav.toPreviousPage();
  };

  const answersView = answers.map((value, index) => {
    return (
      <div key={index} className={classes["answer"]}>
        <div className={classes["answer__switch"]}>
          <Switch value={index == correctAnswer} onChange={(newState) => correctAnswerChangeHandler(index, newState)} />
        </div>
        <div className={classes["answer__text"]}>
          <FormInput value={value} onChange={(event) => answerChangeHandler(event, index)} placeholder="answer" />
        </div>
        <div className={classes["answer__switch"]}>
          <DeleteButton onClick={() => deleteAnswer(index)} />
        </div>
      </div>
    );
  });

  return (
    <>
      <WindowUnloadListener isModify={isModify} />
      <Subpage>
        <TitleSection>
          <GoBackButton onClick={goBackClickHandler} />
          <h3>Create Question</h3>
        </TitleSection>
        <QuestionSection>
          <Textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Question"
            errorMessage={error.question}
          />
          <Switch label="Private" value={isPrivate} onChange={(newState) => setIsPrivate(newState)} />
          <div>
            <DropdownInput
              value={category}
              onChange={(value, index) => setCategory(value)}
              labelTop="Category"
              labelBottom="Choose from the list..."
              items={["1", "2"]}
            />
            <DropdownInput labelTop="Language" labelBottom="Choose from the list..." items={["1", "2"]} />
          </div>
        </QuestionSection>
        <AnswerSection>
          {answersView}
          <div>
            <RoundedButton disabled={answers.length >= 6} onClick={addAnswer}>
              + Add
            </RoundedButton>
            <ErrorMessage message={error.answers} />
            <ErrorMessage message={error.correctAnswerIndex} />
          </div>
        </AnswerSection>
        <FooterSection>
          <CancelButton onClick={onCancelHandler} />
          <CreateButton onClick={onCreateQuestionClickHandler}>Create</CreateButton>
        </FooterSection>
      </Subpage>
    </>
  );
};

export default QuestionCreatePage;
