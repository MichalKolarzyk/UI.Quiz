import { useContext } from "react";
import { GoBackButton } from "../../components/buttons";
import { DarkCard } from "../../components/cards";
import FlexRow from "../../components/flex/FlexRow";
import { GapRowEnum } from "../../components/flex/types";
import { PortalOverlay } from "../../components/portals";
import PromptLayout from "../../layouts/PromptLayout";
import PromptContext from "./PromptContext";
import PromptProvider from "./PromptProvider";

const Context = (props: any) => {
  return (
    <PromptContext.Provider value={PromptProvider()}>
      <div>{props.children}</div>
    </PromptContext.Provider>
  );
};

const View = () => {
  const context = useContext(PromptContext);

  if (!context.isVisible) {
    return <></>;
  }

  return (
    <PortalOverlay>
      <PromptLayout.Prompt>
        <DarkCard>
          <div>
            <PromptLayout.TitleSection>
              <FlexRow.Container gap={GapRowEnum.small}>
                <GoBackButton onClick={() => context.setIsVisible(false)} />
                <h4>{context.title}</h4>
              </FlexRow.Container>
            </PromptLayout.TitleSection>
            <PromptLayout.Content>{context.content}</PromptLayout.Content>
          </div>
        </DarkCard>
      </PromptLayout.Prompt>
    </PortalOverlay>
  );
};

const Prompt = {
  Context,
  View,
};

export default Prompt;
