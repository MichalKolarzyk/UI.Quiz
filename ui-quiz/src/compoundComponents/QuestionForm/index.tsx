import { useContext } from "react";
import QuestionContext from "./QuestionContext";
import { CancelButton, DeleteButton, GoBackButton, RoundedButton } from "../../components/buttons";
import QuestionProvider from "./QuestionProvider";
import Switch from "../../components/switches/Switch";
import Textarea from "../../components/inputs/textarea/Textarea";
import { Dropdown } from "../../components/dropdown";
import FlexRow from "../../components/flex/FlexRow";
import { GapRowEnum, RowPositionEnum } from "../../components/flex/types";
import { TextInput } from "../../components/inputs/textInput";
import ErrorMessage from "../../components/errors";

const Form = (props: any) => {
  return (
    <QuestionContext.Provider value={QuestionProvider()}>
      <div>{props.children}</div>
    </QuestionContext.Provider>
  );
};

const GoBack = () => {
  const context = useContext(QuestionContext);
  return <GoBackButton onClick={context.goBack} />;
};

const IsPrivate = () => {
  const context = useContext(QuestionContext);
  return (
    <Switch disabled={!context.canUserEdit} label="Private" value={context.isPrivate} onChange={context.setIsPrivate} />
  );
};

const Question = () => {
  const context = useContext(QuestionContext);
  return (
    <Textarea
      error={context.questionError}
      disabled={!context.canUserEdit}
      placeholder="Question"
      value={context.question}
      onChange={context.setQuestion}
    />
  );
};

const Category = () => {
  const context = useContext(QuestionContext);
  return (
    <div>
      <h6>Category</h6>
      <Dropdown
        error={context.categoryError}
        disabled={!context.canUserEdit}
        value={context.category}
        onChange={context.setCategory}
        placeholder="Select category..."
        items={context.categoryItems}
      />
    </div>
  );
};

const Language = () => {
  const context = useContext(QuestionContext);
  return (
    <div>
      <h6>Language</h6>
      <Dropdown disabled={!context.canUserEdit} placeholder="Select Language..." items={["1", "2"]} />
    </div>
  );
};

const AddAnswear = () => {
  const context = useContext(QuestionContext);
  if (!context.canUserEdit) return <></>;

  return (
    <RoundedButton disabled={(context.answers.length ?? 0) >= 6} onClick={context.addAnswear}>
      + Add
    </RoundedButton>
  );
};

const Save = () => {
  const context = useContext(QuestionContext);
  if (!context.canUserEdit) return <></>;

  return (
    <RoundedButton disabled={!context.canUserEdit} onClick={context.save}>
      Save
    </RoundedButton>
  );
};

const Cancel = () => {
  const context = useContext(QuestionContext);
  return <CancelButton onClick={context.goBack} />;
};

const Answears = () => {
  const context = useContext(QuestionContext);
  return (
    <>
      {context.answers.map((value, index) => {
        return (
          <FlexRow.Container gap={GapRowEnum.medium}>
            <FlexRow.Item>
              <Switch
                disabled={!context.canUserEdit}
                value={index == context.correctAnswer}
                onChange={(newState) => context.setCorrectAnswer(index)}
              />
            </FlexRow.Item>
            <FlexRow.Item grow={1}>
              <TextInput
                placeholder="Answer"
                disabled={!context.canUserEdit}
                value={value}
                onChange={(value) => context.setAnswear(value, index)}
              />
            </FlexRow.Item>
            <FlexRow.Item>
              <DeleteButton isHidden={!context.canUserEdit} onClick={() => context.removeAnswear(index)} />
            </FlexRow.Item>
          </FlexRow.Container>
        );
      })}{" "}
      <ErrorMessage error={context.answersError} />
      <ErrorMessage error={context.correctAnswerError} />
    </>
  );
};

const QuestionForm = {
  Form,
  GoBack,
  IsPrivate,
  Question,
  Category,
  Language,
  AddAnswear,
  Save,
  Cancel,
  Answears,
};

export default QuestionForm;
