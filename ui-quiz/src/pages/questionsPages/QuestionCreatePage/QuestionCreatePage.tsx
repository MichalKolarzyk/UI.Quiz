import { useEffect, useState } from "react";
import Textarea from "../../../components/inputs/textarea/Textarea";
import WindowUnloadListener from "../../../components/listeners/WindowUnloadListener";
import Switch from "../../../components/switches/Switch";
import useAppNavigation from "../../../hooks/useAppNavigation";
import { CancelButton, CreateButton, DeleteButton, GoBackButton, RoundedButton } from "../../../components/buttons";
import { CreateQuestionRequest, CreateQuestionResponse } from "../../../apis/apiQuiz/ApiQuizModels";
import ErrorMessage, { ErrorMessageBlock } from "../../../components/errors";
import { useNotifications } from "../../../notifications";
import ApiQuizInstance from "../../../apis/apiQuiz/ApiQuizInstance";
import { QuestionError } from "../../../reducers/questionReducers/slice";
import { TextInput } from "../../../components/textInput";
import { Dropdown } from "../../../components/dropdown";
import { useSelector } from "react-redux";
import { referenceItemsStateSelector } from "../../../reducers/referenceItems/slice";
import useQuizApi from "../../../apis/apiQuiz/useQuizApi";
import { QuestionPageLayout } from "../../../layouts/QuestionPageLayout";
import FlexContainer, { GapRowEnum, RowPositionEnum } from "../../../components/containers/FlexRow";
import FlexRow from "../../../components/containers/FlexRow";
import FlexColumn, { GapColumnEnum } from "../../../components/containers/FlexColumn";

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
      <FlexRow.Container gap={GapRowEnum.medium}>
        <FlexRow.Item>
          <Switch
            disabled={endpoint.isLoading}
            value={index == correctAnswer}
            onChange={(newState) => correctAnswerChangeHandler(index, newState)}
          />
        </FlexRow.Item>
        <FlexRow.Item grow={1}>
          <TextInput
            disabled={endpoint.isLoading}
            value={value}
            onChange={(value) => answerChangeHandler(value, index)}
            placeholder="answer"
          />
        </FlexRow.Item>
        <FlexRow.Item>
          <DeleteButton onClick={() => deleteAnswer(index)} />
        </FlexRow.Item>
      </FlexRow.Container>
    );
  });

  return (
    <>
      <WindowUnloadListener isModify={isModify} />
      <QuestionPageLayout.Main>
        <QuestionPageLayout.TitleSection>
          <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
            <GoBackButton onClick={goBackClickHandler} />
            <h3>Create Question</h3>
          </FlexRow.Container>
        </QuestionPageLayout.TitleSection>
        <QuestionPageLayout.QuestionSection>
          <FlexColumn.Container gap={GapColumnEnum.big}>
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
          </FlexColumn.Container>
        </QuestionPageLayout.QuestionSection>
        <QuestionPageLayout.AnswerSection>
          <FlexColumn.Container gap={GapColumnEnum.big}>
            {answersView}
            <ErrorMessage message={endpoint.errors.erros?.answers} />
            <ErrorMessage message={endpoint.errors.erros?.correctAnswerIndex} />
            <FlexRow.Container itemsPosition={RowPositionEnum.center}>
              <RoundedButton disabled={answers.length >= 6} onClick={addAnswer}>
                + Add
              </RoundedButton>
            </FlexRow.Container>
          </FlexColumn.Container>
        </QuestionPageLayout.AnswerSection>
        <QuestionPageLayout.FooterSection>
          <FlexRow.Container itemsPosition={RowPositionEnum.right}>
            <CancelButton onClick={onCancelHandler} />
            <CreateButton onClick={onCreateQuestionClickHandler}>Create</CreateButton>
          </FlexRow.Container>
        </QuestionPageLayout.FooterSection>
      </QuestionPageLayout.Main>
    </>
  );
};

export default QuestionCreatePage;
