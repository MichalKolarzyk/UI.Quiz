import { useContext } from "react";
import { CloseButton, EmptyButton, GoBackButton } from "../../components/buttons";
import { DarkCard } from "../../components/cards";
import FlexRow from "../../components/flex/FlexRow";
import { GapRowEnum, RowPositionEnum } from "../../components/flex/types";
import { PortalOverlay } from "../../components/portals";
import PromptContext from "./PromptContext";
import PromptProvider from "./PromptProvider";
import { PromptLayout } from "../../layouts";

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
            <PromptLayout.Title>
              <FlexRow.Container itemsPosition={RowPositionEnum.spaceBetween} gap={GapRowEnum.small}>
                <h4>{context.title}</h4>
                <CloseButton onClick={() => context.setIsVisible(false)} />
              </FlexRow.Container>
            </PromptLayout.Title>
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
