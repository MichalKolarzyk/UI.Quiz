import { useState } from "react";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import useApiRequest from "../../apis/utils/useApi";
import { TextInput } from "../../components/inputs/textInput";
import useAppNavigation from "../../compoundComponents/Navigation/useAppNavigation";
import { PrimaryButton, SecondaryButton } from "../../components/buttons";


const CreateQuizPage = () => {
  const nav = useAppNavigation();
  const [name, setName] = useState<string>("");

  const request = useApiRequest(
    ApiQuizInstance.createQuiz,
    (response) => {
      nav.toQuizPage(response.id);
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
      <PrimaryButton onClick={onCreateHandler} label="Create"/>
    </>
  );
};

export default CreateQuizPage;
