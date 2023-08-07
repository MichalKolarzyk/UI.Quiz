import { useContext } from "react";
import QuestionContext from "./QuestionContext";
import { GoBackButton } from "../../components/buttons";
import QuestionProvider from "./QuestionProvider";
import Switch from "../../components/switches/Switch";
import Textarea from "../../components/inputs/textarea/Textarea";

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
      //onChange={context.setQuestion}
    />
  );
};

const QuestionForm = {
  Form,
  GoBack,
  IsPrivate,
  Question,
};

export default QuestionForm;
