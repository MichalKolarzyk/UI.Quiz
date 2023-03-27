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
import { CancelButton, DeleteButton, GoBackButton, RoundedButton } from "../../../components/buttons";
import { ArticleSection, FooterSection, Subpage, SubTitleSection, TitleSection } from "../../../layouts/PageLayout";

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
      <WindowUnloadListener>
        <div className={classes["answers__answer"]}>
          <div className={classes["answers__answer__switch"]}>
            <Switch
              value={index == correctAnswerIndex}
              onChange={(newState) => correctAnswerChangeHandler(index, newState)}
            />
          </div>
          <div className={classes["answers__answer__text"]}>
            <FormInput value={value} onChange={(event) => answerChangeHandler(event, index)} placeholder="answer" />
          </div>
          <div className={classes["answers__answer__switch"]}>
            <DeleteButton onClick={() => deleteAnswer(index)} />
          </div>
        </div>
      </WindowUnloadListener>
    );
  });

  return (
    <Subpage>
      <TitleSection>
        <GoBackButton onClick={goBackClickHandler} />
        <span className="h3">Create Question</span>
      </TitleSection>
      <ArticleSection>
        <section className={classes["question"]}>
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
        </section>
        <section className={classes["answers"]}>
          {answersView}
          <RoundedButton disabled={answers.length >= 6} onClick={() => dispatch(createQuestionActions.addAnswer())}>
            + Add
          </RoundedButton>
        </section>
      </ArticleSection>
      <FooterSection>
        <div className={classes.actions}>
          <CancelButton onClick={onCancelHandler} />
          <RoundedButton>Save</RoundedButton>
        </div>
      </FooterSection>
    </Subpage>
  );
};

export default QuestionCreatePage;
