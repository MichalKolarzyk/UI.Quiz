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
import FlexRow from "../../../components/flex/FlexRow";
import FlexColumn from "../../../components/flex/FlexColumn";
import { useNotifications } from "../../../compoundComponents/Notifications/hooks";
import { GapColumnEnum, GapRowEnum, RowPositionEnum } from "../../../components/flex/types";
import { QuestionLayout } from "../../../layouts";
import QuestionForm from "../../../compoundComponents/QuestionForm";

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

  return (
    <QuestionForm.Form>
      <QuestionLayout.Main>
        <QuestionLayout.Title>
          <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
            <QuestionForm.GoBack />
            <h3>Question</h3>
          </FlexRow.Container>
        </QuestionLayout.Title>
        <QuestionLayout.Question>
          <FlexColumn.Container gap={GapColumnEnum.big}>
            <QuestionForm.Question />
            <QuestionForm.IsPrivate />
            <QuestionForm.Category />
            <QuestionForm.Language />
          </FlexColumn.Container>
        </QuestionLayout.Question>
        <QuestionLayout.Answer>
          <FlexColumn.Container gap={GapColumnEnum.big}>
            <QuestionForm.Answears />
            <div>
              <FlexRow.Container itemsPosition={RowPositionEnum.center}>
                <QuestionForm.AddAnswear />
              </FlexRow.Container>
              <ErrorMessage error={apiError.erros?.answers} />
              <ErrorMessage error={apiError.erros?.correctAnswerIndex} />
            </div>
          </FlexColumn.Container>
        </QuestionLayout.Answer>
        <QuestionLayout.Footer>
          <FlexRow.Container itemsPosition={RowPositionEnum.right}>
            <QuestionForm.Cancel />
            <QuestionForm.Save />
          </FlexRow.Container>
        </QuestionLayout.Footer>
      </QuestionLayout.Main>
    </QuestionForm.Form>
  );
};

export default QuestionPage;
