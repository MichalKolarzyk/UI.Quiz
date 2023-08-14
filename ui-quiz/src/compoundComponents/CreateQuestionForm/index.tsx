import { useContext } from "react";
import Textarea from "../../components/inputs/textarea/Textarea";
import CreateQuestionContext from "./CreateQuestionContext";
import CreateQuestionProvider from "./CreateQuestionProvider";
import Switch from "../../components/switches/Switch";
import { Dropdown } from "../../components/dropdown";
import FlexRow from "../../components/flex/FlexRow";
import { GoBackButton, PrimaryButton, SecondaryButton, TertiaryButton } from "../../components/buttons";
import { TextInput } from "../../components/inputs/textInput";
import { GapRowEnum, RowPositionEnum } from "../../components/flex/types";
import ErrorMessage from "../../components/errors";
import { IconComponents } from "../../components/icons";
import { Colors } from "../../scss/colors/types";

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
      onChange={context.setQuestion}
      placeholder="Question"
      error={context.questionError}
    />
  );
};

const CreateQuestion = () => {
  const context = useContext(CreateQuestionContext);
  return <PrimaryButton onClick={context.createQuestion} label="Create"/>;
};

const Cancel = () => {
  const context = useContext(CreateQuestionContext);
  return <TertiaryButton color={Colors.white} onClick={context.goBack} label="Cancel" icon={IconComponents.Cancel} />;
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
        error={context.categoryError}
        placeholder="Select category..."
        value={context.category}
        onChange={(value) => context.setCategory(value)}
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
              <TertiaryButton icon={IconComponents.Delete} color={Colors.white} onClick={() => context.removeAnswear(index)} />
            </FlexRow.Item>
          </FlexRow.Container>
        );
      })}
      <ErrorMessage error={context.answersError} />
      <ErrorMessage error={context.correctAnswerError} />
      <FlexRow.Container itemsPosition={RowPositionEnum.left}>
        <SecondaryButton disabled={context.answers.length >= 6} onClick={context.addAnswear} label="Add answear" icon={IconComponents.Add} iconPosition="left"/>

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
