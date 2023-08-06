import { useParams } from "react-router-dom";
import { CancelButton, DeleteButton, GoBackButton, RoundedButton } from "../../../components/buttons";
import Textarea from "../../../components/inputs/textarea/Textarea";
import Switch from "../../../components/switches/Switch";
import useAppNavigation from "../../../hooks/useAppNavigation";
import { UpdateQuestionRequest } from "../../../apis/apiQuiz/ApiQuizModels";
import { useEffect, useState } from "react";
import ApiQuizInstance from "../../../apis/apiQuiz/ApiQuizInstance";
import { useApiError } from "../../../apis/apiQuiz/useApiError";
import { QuestionError } from "../../../reducers/questionReducers/slice";
import ErrorMessage from "../../../components/errors";
import { TextInput } from "../../../components/textInput";
import { Dropdown } from "../../../components/dropdown";
import { referenceItemsStateSelector } from "../../../reducers/referenceItems/slice";
import { useSelector } from "react-redux";
import FlexRow  from "../../../components/flex/FlexRow";
import FlexColumn from "../../../components/flex/FlexColumn";
import { useNotifications } from "../../../compoundComponents/Notifications/hooks";
import { GapColumnEnum, GapRowEnum, RowPositionEnum } from "../../../components/flex/types";
import { QuestionPageLayout } from "../../../layouts";

const QuestionPage = () => {
  const params = useParams();
  const id = params["questionId"];
  const apiError = useApiError<QuestionError>();

  const notify = useNotifications();
  const nav = useAppNavigation();
  const { categories } = useSelector(referenceItemsStateSelector);

  const [isPrivate, setIsPrivate] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [question, setQuestion] = useState("");
  const [defaultLanugage, setDefaultLanugage] = useState("");
  const [category, setCategory] = useState("");
  const [answers, setAnswers] = useState<Array<string>>([]);
  const [canUserEdit, setCanUserEdit] = useState(true);

  useEffect(() => {
    ApiQuizInstance.getQuestionById(id ?? "").then((response) => {
      setIsPrivate(response.data.isPrivate);
      setCorrectAnswer(response.data.correctAnswerIndex);
      setQuestion(response.data.description);
      setCategory(response.data.category);
      setAnswers(response.data.answers);
      setCanUserEdit(response.data.canUserEdit);
    });
  }, []);

  const updateIsPrivate = (newState: boolean) => {
    setIsPrivate(newState);
  };

  const updateDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.target.value);
  };

  const updateCorrectAnswer = (index: number, newState: boolean) => {
    if (newState === false) {
      setCorrectAnswer(-1);
      return;
    }
    setCorrectAnswer(index);
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

  const updateAnswer = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers([...newAnswers]);
  };

  const addAnswer = () => {
    const newAnswers = [...answers, ""];
    setAnswers([...newAnswers]);
  };

  const onSaveHandler = () => {
    ApiQuizInstance.updateQuestion({
      answers: answers ?? [],
      id: id ?? "",
      category: category ?? "",
      correctAnswerIndex: correctAnswer ?? 1,
      defaultLanugage: defaultLanugage ?? "",
      isPrivate: isPrivate ?? true,
      question: question ?? "",
    } as UpdateQuestionRequest)
      .then((response) => {
        notify.addInfo("Question updated");
        apiError.restart();
      })
      .catch((response) => {
        notify.addError("Not all values are valid");
        apiError.setError(response);
      });
  };

  const answersView = answers.map((value, index) => {
    return (
      <FlexRow.Container gap={GapRowEnum.medium}>
        <FlexRow.Item>
          <Switch
            disabled={!canUserEdit}
            value={index == correctAnswer}
            onChange={(newState) => updateCorrectAnswer(index, newState)}
          />
        </FlexRow.Item>
        <FlexRow.Item grow={1}>
          <TextInput
            placeholder="Answer"
            disabled={!canUserEdit}
            value={value}
            onChange={(value) => updateAnswer(index, value)}
          />
        </FlexRow.Item>
        <FlexRow.Item>
          <DeleteButton onClick={() => deleteAnswer(index)} />
        </FlexRow.Item>
      </FlexRow.Container>
    );
  });

  return (
    <QuestionPageLayout.Main>
      <QuestionPageLayout.Title>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <GoBackButton onClick={() => nav.toPreviousPage()} />
          <h3>Question</h3>
        </FlexRow.Container>
      </QuestionPageLayout.Title>
      <QuestionPageLayout.Question>
        <FlexColumn.Container gap={GapColumnEnum.big}>
          <Textarea
            errorMessage={apiError.erros?.description}
            disabled={!canUserEdit}
            placeholder="Question"
            value={question}
            onChange={updateDescription}
          />
          <Switch disabled={!canUserEdit} label="Private" value={isPrivate} onChange={updateIsPrivate} />
          <div>
            <h6>Category</h6>
            <Dropdown
              errorMessage={apiError.erros?.category}
              disabled={!canUserEdit}
              value={category}
              setValue={(value) => setCategory(value)}
              placeholder="Select category..."
              items={categories?.map((c) => c.value)}
            />
          </div>

          <div>
            <h6>Language</h6>
            <Dropdown disabled={!canUserEdit} placeholder="Select Language..." items={["1", "2"]} />
          </div>
        </FlexColumn.Container>
      </QuestionPageLayout.Question>
      <QuestionPageLayout.Answer>
        <FlexColumn.Container gap={GapColumnEnum.big}>
          {answersView}
          <div>
            {canUserEdit && (
              <FlexRow.Container itemsPosition={RowPositionEnum.center}>
                <RoundedButton disabled={(answers.length ?? 0) >= 6} onClick={addAnswer}>
                  + Add
                </RoundedButton>
              </FlexRow.Container>
            )}

            <ErrorMessage message={apiError.erros?.answers} />
            <ErrorMessage message={apiError.erros?.correctAnswerIndex} />
          </div>
        </FlexColumn.Container>
      </QuestionPageLayout.Answer>
      <QuestionPageLayout.Footer>
        <FlexRow.Container itemsPosition={RowPositionEnum.right}>
          <CancelButton onClick={nav.toPreviousPage} />
          {canUserEdit && (
            <RoundedButton disabled={!canUserEdit} onClick={onSaveHandler}>
              Save
            </RoundedButton>
          )}
        </FlexRow.Container>
      </QuestionPageLayout.Footer>
    </QuestionPageLayout.Main>
  );
};

export default QuestionPage;
