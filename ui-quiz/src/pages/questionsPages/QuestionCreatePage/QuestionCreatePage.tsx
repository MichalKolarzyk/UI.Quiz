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
import { CreateQuestionRequest, CreateQuestionResponse } from "../../../apis/apiQuiz/ApiQuizModels";
import ErrorMessage from "../../../components/errors";
import { AppNotificationType, useNotifications } from "../../../notifications";
import ApiQuizInstance from "../../../apis/apiQuiz/ApiQuizInstance";
import { QuestionError } from "../../../reducers/questionReducers/slice";
import { useApiError } from "../../../apis/apiQuiz/useApiError";
import { TextInput } from "../../../components/textInput";
import { Dropdown } from "../../../components/dropdown";
import { useSelector } from "react-redux";
import { referenceItemsStateSelector } from "../../../reducers/referenceItems/slice";
import useQuizApi from "../../../apis/apiQuiz/useQuizApi";

const QuestionCreatePage = () => {
  const [isModify, setIsModify] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [answers, setAnswers] = useState<Array<string>>(["", "", ""]);

  const nav = useAppNavigation();
  const notify = useNotifications();

  const { categories } = useSelector(referenceItemsStateSelector);
  const categoryItems = categories?.map?.((c) => c.value) ?? [];

  useEffect(() => {
    if (isPrivate == false && correctAnswer == 0 && question == "" && category == "" && answers.every((e) => e == "")) {
      setIsModify(false);
    } else {
      setIsModify(true);
    }
  }, [isPrivate, correctAnswer, question, category, answers]);

  const answerChangeHandler = (newValue: string, index: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = newValue;
    setAnswers([...newAnswers]);
  };

  const correctAnswerChangeHandler = (index: number, value: boolean) => {
    setCorrectAnswer(index);
  };

  const endpoint = useQuizApi<CreateQuestionRequest, CreateQuestionResponse, QuestionError>(
    (request) => ApiQuizInstance.createQuestion(request),
    () => notify.addCorrect("Question created"),
    () => notify.addError("Some informations are invalid")
  );

  const onCreateQuestionClickHandler = () => {
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
          <Switch
            disabled={endpoint.isLoading}
            value={index == correctAnswer}
            onChange={(newState) => correctAnswerChangeHandler(index, newState)}
          />
        </div>
        <div className={classes["answer__text"]}>
          <TextInput
            disabled={endpoint.isLoading}
            value={value}
            onChange={(value) => answerChangeHandler(value, index)}
            placeholder="answer"
          />
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
            disabled={endpoint.isLoading}
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Question"
            errorMessage={endpoint.errors.erros?.description}
          />
          <Switch
            disabled={endpoint.isLoading}
            label="Private"
            value={isPrivate}
            onChange={(newState) => setIsPrivate(newState)}
          />
          <div>
            <h6>Category</h6>
            <Dropdown
              disabled={endpoint.isLoading}
              errorMessage={endpoint.errors.erros?.category}
              placeholder="Select category..."
              value={category}
              setValue={(value) => setCategory(value)}
              items={categoryItems}
            />
          </div>
          <div>
            <h6>Language</h6>
            <Dropdown placeholder="Select language..." items={["1", "2"]} />
          </div>
        </QuestionSection>
        <AnswerSection>
          {answersView}
          <div>
            <RoundedButton disabled={answers.length >= 6} onClick={addAnswer}>
              + Add
            </RoundedButton>
            <ErrorMessage message={endpoint.errors.erros?.answers} />
            <ErrorMessage message={endpoint.errors.erros?.correctAnswerIndex} />
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
