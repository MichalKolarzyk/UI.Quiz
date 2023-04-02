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
import QuestionLoader from "../../../components/loaders/QuestionLoader";
import { useSelector } from "react-redux";
import { questionStateSelector } from "../../../reducers/questionReducers/selectors";
import classes from "./QuestionPage.module.scss";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import { useAppDispatch } from "../../../store/store";
import { updateQuestion } from "../../../reducers/questionReducers/asyncActions";
import { setQuestion } from "../../../reducers/questionReducers/slice";
import { Question } from "../../../apis/apiQuiz/ApiQuizModels";

const QuestionPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const id = params["questionId"];

  const nav = useAppNavigation();
  const { question } = useSelector(questionStateSelector);

  const updateIsPrivate = (newState: boolean) => {
    dispatch(setQuestion({ 
      ...question ?? ({} as Question),
      isPrivate: newState,
    }));
  };

  const updateDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setQuestion({ 
      ...question ?? ({} as Question),
      description: event.target.value,
    }));
  }

  const updateCorrectAnswer = (index: number, newState: boolean) => {
    dispatch(setQuestion({ 
      ...question ?? ({} as Question),
      correctAnswerIndex: newState ? index : -1,
    }));
  }

  const updateAnswer = (index: number, answer: string) => {
    const newAnswers = [...question?.answers ?? []]
    newAnswers[index] = answer;
    dispatch(setQuestion({ 
      ...question ?? ({} as Question),
      answers: [...newAnswers]
    }));
  }

  const addAnswer = () => {
    const newAnswers = [...question?.answers ?? [], '']
    dispatch(setQuestion({ 
      ...question ?? ({} as Question),
      answers: [...newAnswers]
    }));
  }


  const onSaveHandler = () => {
    dispatch(updateQuestion({
      answers: question?.answers ?? [],
      id: id ?? "",
      category: question?.category ?? "",
      correctAnswerIndex: question?.correctAnswerIndex ?? 1,
      defaultLanugage: question?.defaultLanugage ?? "",
      isPrivate: question?.isPrivate ?? true,
      question: question?.description ?? "",
    }))
  }

  const answersView = question?.answers.map((value, index) => {
    return (
      <div key={index} className={classes["answer"]}>
        <div className={classes["answer__switch"]}>
          <Switch value={index == question?.correctAnswerIndex} onChange={(newState) => updateCorrectAnswer(index, newState)} />
        </div>
        <div className={classes["answer__text"]}>
          <FormInput value={value} onChange={(event) => updateAnswer(index, event.target.value)}/>
        </div>
        <div className={classes["answer__switch"]}></div>
      </div>
    );
  });

  return (
    <QuestionLoader questionId={id}>
      <Subpage>
        <TitleSection>
          <GoBackButton onClick={() => nav.toPreviousPage()} />
          <span className="h3">Question</span>
        </TitleSection>
        <QuestionSection>
          <Textarea placeholder="Question" value={question?.description} onChange={updateDescription} />
          <Switch label="Private" value={question?.isPrivate} onChange={updateIsPrivate} />
          <div>
            <DropdownInput
              value={question?.category}
              labelTop="Category"
              labelBottom="Choose from the list..."
              items={["1", "2"]}
            />
            <DropdownInput
              value={question?.defaultLanugage}
              labelTop="Language"
              labelBottom="Choose from the list..."
              items={["1", "2"]}
            />
          </div>
        </QuestionSection>
        <AnswerSection>
          {answersView}
          <div>
            <RoundedButton disabled={(question?.answers.length ?? 0) >= 6} onClick={addAnswer}>+ Add</RoundedButton>
          </div>
        </AnswerSection>
        <FooterSection>
          <CancelButton onClick={nav.toPreviousPage}/>
          <RoundedButton onClick={onSaveHandler}>Save</RoundedButton>
        </FooterSection>
      </Subpage>
    </QuestionLoader>
  );
};

export default QuestionPage;
