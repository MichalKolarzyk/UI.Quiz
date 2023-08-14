import { useContext } from "react";
import FlexRow from "../../components/flex/FlexRow";
import { GapRowEnum, RowPositionEnum } from "../../components/flex/types";
import { PortalOverlay } from "../../components/portals";
import PromptContext from "./PromptContext";
import PromptProvider from "./PromptProvider";
import { PromptLayout } from "../../layouts";
import { SecondaryButton } from "../../components/buttons";
import { IconComponents } from "../../components/icons";
import { Card } from "../../components/cards";
import { BackgroundColors } from "../../scss/backgroundColors/types";

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
        <Card backgroundColor={BackgroundColors.primary}>
          <div>
            <PromptLayout.Title>
              <FlexRow.Container itemsPosition={RowPositionEnum.spaceBetween} gap={GapRowEnum.small}>
                <h4>{context.title}</h4>
                <SecondaryButton icon={IconComponents.Close} label="Close" onClick={() => context.setIsVisible(false)} />
              </FlexRow.Container>
            </PromptLayout.Title>
            <PromptLayout.Content>{context.content}</PromptLayout.Content>
          </div>
        </Card>
      </PromptLayout.Prompt>
    </PortalOverlay>
  );
};

const Prompt = {
  Context,
  View,
};

export default Prompt;
