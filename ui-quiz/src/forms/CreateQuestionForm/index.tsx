import { useContext } from "react";
import Textarea from "../../components/inputs/textarea/Textarea";
import CreateQuestionContext from "./CreateQuestionContext";
import CreateQuestionProvider from "./CreateQuestionProvider";
import Switch from "../../components/switches/Switch";
import { Dropdown } from "../../components/dropdown";
import FlexRow, { GapRowEnum, RowPositionEnum } from "../../components/containers/FlexRow";
import { CancelButton, CreateButton, DeleteButton, GoBackButton, RoundedButton } from "../../components/buttons";
import { TextInput } from "../../components/textInput";
import ErrorMessage from "../../components/errors";

const GoBack = () => {
  const context = useContext(CreateQuestionContext);
  return <GoBackButton onClick={context.goBack} />;
};

const Question = () => {
  const context = useContext(CreateQuestionContext);
  return (
    <Textarea
      disabled={context.isLoading}
      value={context.question}
      onChange={(event) => context.setQuestion(event.target.value)}
      placeholder="Question"
      errorMessage={context.questionError}
    />
  );
};

const CreateQuestion = () => {
  const context = useContext(CreateQuestionContext);
  return <CreateButton onClick={context.createQuestion}>Create</CreateButton>;
};

const Cancel = () => {
  const context = useContext(CreateQuestionContext);
  return <CancelButton onClick={context.goBack} />;
};

const Form = (props: any) => {
  return (
    <CreateQuestionContext.Provider value={CreateQuestionProvider()}>
      <div>{props.children}</div>
    </CreateQuestionContext.Provider>
  );
};

const IsPrivate = () => {
  const context = useContext(CreateQuestionContext);
  return (
    <Switch
      disabled={context.isLoading}
      label="Private"
      value={context.isPrivate}
      onChange={(newState) => context.setIsPrivate(newState)}
    />
  );
};

const Category = () => {
  const context = useContext(CreateQuestionContext);
  return (
    <div>
      <h6>Category</h6>
      <Dropdown
        disabled={context.isLoading}
        errorMessage={context.categoryError}
        placeholder="Select category..."
        value={context.category}
        setValue={(value) => context.setCategory(value)}
        items={context.categoryItems}
      />
    </div>
  );
};

const Language = () => {
  return (
    <div>
      <h6>Language</h6>
      <Dropdown placeholder="Select language..." items={["1", "2"]} />
    </div>
  );
};

const Answers = () => {
  const context = useContext(CreateQuestionContext);
  return (
    <>
      {context.answers.map((value, index) => {
        return (
          <FlexRow.Container gap={GapRowEnum.medium}>
            <FlexRow.Item>
              <Switch
                disabled={context.isLoading}
                value={index == context.correctAnswer}
                onChange={(newState) => context.setCorrectAnswer(index)}
              />
            </FlexRow.Item>
            <FlexRow.Item grow={1}>
              <TextInput
                disabled={context.isLoading}
                value={value}
                onChange={(value) => context.setAnswear(value, index)}
                placeholder="answer"
              />
            </FlexRow.Item>
            <FlexRow.Item>
              <DeleteButton onClick={() => context.removeAnswear(index)} />
            </FlexRow.Item>
          </FlexRow.Container>
        );
      })}
      {/* <ErrorMessage message={endpoint.errors.erros?.answers} />
      <ErrorMessage message={endpoint.errors.erros?.correctAnswerIndex} /> */}
      <FlexRow.Container itemsPosition={RowPositionEnum.center}>
        <RoundedButton disabled={context.answers.length >= 6} onClick={context.addAnswear}>
          + Add
        </RoundedButton>
      </FlexRow.Container>
    </>
  );
};

const CreateQuestionForm = {
  Question,
  IsPrivate,
  Category,
  Language,
  Answers,
  CreateQuestion,
  Cancel,
  GoBack,
  Form,
};

export default CreateQuestionForm;
