import { ChangeEvent, useEffect, useState } from "react";
import DeleteButton from "../../../components/buttons/DeleteButton/DeleteButton";
import GoBackButton from "../../../components/buttons/GoBackButton/GoBackButton";
import RoundedButton from "../../../components/buttons/RoundedButton/RoundedButton";
import DropdownInput from "../../../components/inputs/dropdownInput/DropdownInput";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import Textarea from "../../../components/inputs/textarea/Textarea";
import Switch from "../../../components/switches/Switch";
import useAppNavigation from "../../../hooks/useAppNavigation";
import classes from "./QuestionCreatePage.module.scss";

const QuestionCreatePage = () => {
  const nav = useAppNavigation();

  const [answers, setAnswers] = useState<Array<string>>(["", "", ""]);
  const [isCorrectArray, setIsCorrectArray] = useState<Array<boolean>>([false, false, false]);
  const [isPrivate, setIsPrivate] = useState(true);
  const [question, setQuestion] = useState("");

  const answerChangeHandler = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const newAnswers = answers;
    newAnswers[index] = event.target.value;
    setAnswers([...newAnswers]);
  };

  const correctAnswerChangeHandler = (index: number, value: boolean) => {
    const newState = Array.from({ length: isCorrectArray.length }, (i) => (i = false));
    newState[index] = value;
    setIsCorrectArray([...newState]);
  };

  const deleteAnswer = (index: number) => {
    const newAnswers = answers;
    newAnswers.splice(index, 1);
    setAnswers([...newAnswers]);

    const newStates = isCorrectArray;
    newStates.splice(index, 1);
    setIsCorrectArray([...newStates]);
  };

  const goBackClickHandler = () => {
    nav.toPreviousPage();
  };

  const answersView = answers.map((value, index) => {
    return (
      <div className={classes["answers-section__answer"]}>
        <div className={classes["answers-section__answer__switch"]}>
          <Switch value={isCorrectArray[index]} onChange={(newState) => correctAnswerChangeHandler(index, newState)} />
        </div>
        <div className={classes["answers-section__answer__text"]}>
          <FormInput value={value} onChange={(event) => answerChangeHandler(event, index)} placeholder="answer" />
        </div>
        <div className={classes["answers-section__answer__switch"]}>
          <DeleteButton onClick={() => deleteAnswer(index)}/>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <div className={classes.header__title}>
          <GoBackButton onClick={goBackClickHandler} />
          <span className="h3">Create Question</span>
        </div>
      </header>
      <section className={classes["top-section"]}>
        <Switch label="Private" value={isPrivate} onChange={(newState) => setIsPrivate(newState)} />
      </section>
      <section className={classes["question-section"]}>
        <Textarea value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Question" />
        <DropdownInput labelTop="Category" labelBottom="Choose from the list..." items={["1", "2"]} />
        <DropdownInput labelTop="Language" labelBottom="Choose from the list..." items={["1", "2"]} />
      </section>
      <section className={classes["answers-section"]}>
        {answersView}
        <RoundedButton disabled={answers.length >= 6} onClick={() => setAnswers([...answers, ""])}>
          + Add answer
        </RoundedButton>
      </section>
    </div>
  );
};

export default QuestionCreatePage;
