import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropdownInput from "../../../components/inputs/dropdownInput/DropdownInput";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import Textarea from "../../../components/inputs/textarea/Textarea";
import WindowUnloadListener from "../../../components/listeners/WindowUnloadListener";
import Switch from "../../../components/switches/Switch";
import useAppNavigation from "../../../hooks/useAppNavigation";
import { createQuestionStateSelector } from "../../../reducers/createQuestionReducers/selectors";
import { createQuestionActions } from "../../../reducers/createQuestionReducers/slice";
import classes from "./QuestionCreatePage.module.scss";
import { CancelButton, CreateButton, DeleteButton, GoBackButton, RoundedButton } from "../../../components/buttons";
import {
  AnswerSection,
  FooterSection,
  QuestionSection,
  Subpage,
  TitleSection,
} from "../../../layouts/QuestionPageLayout";

const QuestionCreatePage = () => {
  const nav = useAppNavigation();
  const dispatch = useDispatch();
  const { answers, category, correctAnswerIndex, isPrivate, question } = useSelector(createQuestionStateSelector);

  const answerChangeHandler = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(createQuestionActions.setAnswer({ index, text: event.target.value }));
  };

  const correctAnswerChangeHandler = (index: number, value: boolean) => {
    dispatch(createQuestionActions.setCorrectAnswerIndex(index));
  };

  const deleteAnswer = (index: number) => {
    dispatch(createQuestionActions.deleteAnswer(index));
  };

  const goBackClickHandler = () => {
    nav.toPreviousPage();
  };

  const onCancelHandler = () => {
    const result = window.confirm("Do you want to discard all changes?");
    if (result) {
      dispatch(createQuestionActions.clearAll());
      nav.toPreviousPage();
    }
  };

  const answersView = answers.map((value, index) => {
    return (
      <div key={index} className={classes["answer"]}>
        <div className={classes["answer__switch"]}>
          <Switch
            value={index == correctAnswerIndex}
            onChange={(newState) => correctAnswerChangeHandler(index, newState)}
          />
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
    <WindowUnloadListener>
      <Subpage>
        <TitleSection>
          <GoBackButton onClick={goBackClickHandler} />
          <span className="h3">Create Question</span>
        </TitleSection>
        <QuestionSection>
          <Textarea
            value={question}
            onChange={(event) => dispatch(createQuestionActions.setQuestion(event.target.value))}
            placeholder="Question"
          />
          <Switch
            label="Private"
            value={isPrivate}
            onChange={(newState) => dispatch(createQuestionActions.setIsPrivate(newState))}
          />
          <div>
            <DropdownInput
              value={category}
              onChange={(value, index) => {
                dispatch(createQuestionActions.setCategory(value));
              }}
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
            <RoundedButton disabled={answers.length >= 6} onClick={() => dispatch(createQuestionActions.addAnswer())}>
              + Add
            </RoundedButton>
          </div>
        </AnswerSection>
        <FooterSection>
          <CancelButton onClick={onCancelHandler} />
          <CreateButton>Create</CreateButton>
        </FooterSection>
      </Subpage>
    </WindowUnloadListener>
  );
};

export default QuestionCreatePage;
