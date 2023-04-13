import { useState } from "react";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { CreateQuizRequest } from "../../apis/apiQuiz/models/quiz";
import useApiRequest from "../../apis/apiQuiz/useQuizApi";
import { CancelButton, GoBackButton, RoundedButton } from "../../components/buttons";
import { DarkCard } from "../../components/cards";
import FlexRow, { GapRowEnum, RowPositionEnum } from "../../components/containers/FlexRow";
import { Portal, PortalOverlay } from "../../components/portals";
import { TextInput } from "../../components/textInput";
import useAppNavigation from "../../hooks/useAppNavigation";
import PromptLayout from "../../layouts/PromptLayout";

const CreateQuizPage = () => {
  const nav = useAppNavigation();
  const [name, setName] = useState<string>("");
  
  const request = useApiRequest(
    (request: CreateQuizRequest) => ApiQuizInstance.createQuiz(request),
    (response) => {nav.toQuizPage(response.data.id)}
  );

  const onCreateHandler = () => {
    request.call({
      name: name
    })
  }
  return (
    <Portal>
      <PortalOverlay>
        <PromptLayout.Prompt>
          <DarkCard>
            <PromptLayout.Content>
              <PromptLayout.TitleSection>
                <FlexRow.Container gap={GapRowEnum.small}>
                  <GoBackButton onClick={nav.toPreviousPage} />
                  <h4>Create new Quizs:</h4>
                </FlexRow.Container>
              </PromptLayout.TitleSection>
              <PromptLayout.Content>
                <TextInput value={name} onChange={setName} placeholder="Quiz name" />
              </PromptLayout.Content>
              <PromptLayout.FooterSection>
                <FlexRow.Container itemsPosition={RowPositionEnum.right}>
                  <CancelButton onClick={nav.toPreviousPage} />
                  <RoundedButton onClick={onCreateHandler}>Create</RoundedButton>
                </FlexRow.Container>
              </PromptLayout.FooterSection>
            </PromptLayout.Content>
          </DarkCard>
        </PromptLayout.Prompt>
      </PortalOverlay>
    </Portal>
  );
};

export default CreateQuizPage;
