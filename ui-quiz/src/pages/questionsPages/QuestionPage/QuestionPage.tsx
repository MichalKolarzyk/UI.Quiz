import { useParams } from "react-router-dom";
import { CancelButton, GoBackButton, RoundedButton } from "../../../components/buttons";
import DropdownInput from "../../../components/inputs/dropdownInput/DropdownInput";
import Textarea from "../../../components/inputs/textarea/Textarea";
import Switch from "../../../components/switches/Switch";
import useAppNavigation from "../../../hooks/useAppNavigation";
import {
  QuestionSection,
  AnswerSection,
  TitleSection,
  FooterSection,
  Subpage,
} from "../../../layouts/QuestionPageLayout";
import classes from "./QuestionPage.module.scss";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import { Question, UpdateQuestionRequest } from "../../../apis/apiQuiz/ApiQuizModels";
import { useEffect, useState } from "react";
import ApiQuizInstance from "../../../apis/apiQuiz/ApiQuizInstance";
import { useNotifications } from "../../../notifications";

const QuestionPage = () => {
  const params = useParams();
  const id = params["questionId"];

  const notify = useNotifications();
  const nav = useAppNavigation();

  const [isPrivate, setIsPrivate] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [question, setQuestion] = useState("");
  const [defaultLanugage, setDefaultLanugage] = useState("");
  const [category, setCategory] = useState("");
  const [answers, setAnswers] = useState<Array<string>>(["", "", ""]);
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
        notify.addCorrect("Question updated");
      })
      .catch((response) => {
        notify.addError("Not all values are valid");
      });
  };

  const answersView = answers.map((value, index) => {
    return (
      <div key={index} className={classes["answer"]}>
        <div className={classes["answer__switch"]}>
          <Switch
            disabled={!canUserEdit}
            value={index == correctAnswer}
            onChange={(newState) => updateCorrectAnswer(index, newState)}
          />
        </div>
        <div className={classes["answer__text"]}>
          <FormInput
            disabled={!canUserEdit}
            value={value}
            onChange={(event) => updateAnswer(index, event.target.value)}
          />
        </div>
        <div className={classes["answer__switch"]}></div>
      </div>
    );
  });

  return (
    <Subpage>
      <TitleSection>
        <GoBackButton onClick={() => nav.toPreviousPage()} />
        <h3>Question</h3>
      </TitleSection>
      <QuestionSection>
        <Textarea disabled={!canUserEdit} placeholder="Question" value={question} onChange={updateDescription} />
        <Switch disabled={!canUserEdit} label="Private" value={isPrivate} onChange={updateIsPrivate} />
        <div>
          <DropdownInput
            disabled={!canUserEdit}
            value={category}
            labelTop="Category"
            labelBottom="Choose from the list..."
            items={["1", "2"]}
          />
          <DropdownInput
            disabled={!canUserEdit}
            value={defaultLanugage}
            labelTop="Language"
            labelBottom="Choose from the list..."
            items={["1", "2"]}
          />
        </div>
      </QuestionSection>
      <AnswerSection>
        {answersView}
        <div>
          { canUserEdit &&
            <RoundedButton disabled={(answers.length ?? 0) >= 6} onClick={addAnswer}>
              + Add
            </RoundedButton>
          }
        </div>
      </AnswerSection>
      <FooterSection>
        <CancelButton onClick={nav.toPreviousPage} />
        {canUserEdit && (
          <RoundedButton disabled={!canUserEdit} onClick={onSaveHandler}>
            Save
          </RoundedButton>
        )}
      </FooterSection>
    </Subpage>
  );
};

export default QuestionPage;
