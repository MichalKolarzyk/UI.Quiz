import { CancelButton, RoundedButton } from "../../components/buttons";
import { DarkCard } from "../../components/cards";
import { Portal, PortalOverlay } from "../../components/portals";
import { Content, FooterSection, Prompt, TitleSection } from "../../layouts/PromptLayout";

const CreateQuizPage = () => {
    return     <Portal>
    <PortalOverlay>
      <Prompt>
        <DarkCard>
          <Content >
            <TitleSection>
              <h4>Do you want to leave changes?</h4>
            </TitleSection>
            <FooterSection>
              <CancelButton/>

            </FooterSection>
          </Content>
        </DarkCard>
      </Prompt>
    </PortalOverlay>
  </Portal>
}

export default CreateQuizPage;