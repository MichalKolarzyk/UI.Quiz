import { useState } from "react";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { CreateQuizRequest } from "../../apis/apiQuiz/models/quiz";
import useApiRequest from "../../apis/apiQuiz/useQuizApi";
import { CancelButton, RoundedButton } from "../../components/buttons";
import { TextInput } from "../../components/textInput";
import useAppNavigation from "../../hooks/useAppNavigation";


const CreateQuizPage = () => {
  const nav = useAppNavigation();
  const [name, setName] = useState<string>("");

  const request = useApiRequest(
    (request: CreateQuizRequest) => ApiQuizInstance.createQuiz(request),
    (response) => {
      nav.toQuizPage(response.data.id);
    }
  );

  const onCreateHandler = () => {
    request.call({
      name: name,
    });
  };
  return (
    <>
      <TextInput value={name} onChange={setName} placeholder="Quiz name" />
      <RoundedButton onClick={onCreateHandler}>Create</RoundedButton>
    </>
  );
};

export default CreateQuizPage;
