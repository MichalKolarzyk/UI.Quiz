import { useEffect } from "react";
import { unstable_useBlocker as useBlocker } from "react-router-dom";
import { CancelButton, RoundedButton } from "../buttons";
import { DarkCard } from "../cards";
import { Portal, PortalOverlay } from "../portals";
import PromptLayout from "../../layouts/PromptLayout";
import FlexRow from "../flex/FlexRow";
import { RowPositionEnum } from "../flex/types";

const WindowUnloadListener = (props: WindowUnloadListenerProps) => {
  const blocker = useBlocker(props.isModify);

  const handler = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    return !props.isModify;
  };

  useEffect(() => {
    window.onbeforeunload = handler;
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  useEffect(() => {
    blocker.reset?.();
  }, []);

  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    mount?.appendChild(el);
    return () => {
      mount?.removeChild(el);
    };
  });

  let prompt;

  prompt = (
    <Portal>
      <PortalOverlay>
        <PromptLayout.Prompt>
          <DarkCard>
            <PromptLayout.Content>
              <PromptLayout.TitleSection>
                <h4>Do you want to leave changes?</h4>
              </PromptLayout.TitleSection>
              <PromptLayout.FooterSection>
                <FlexRow.Container itemsPosition={RowPositionEnum.center}>
                  <CancelButton onClick={() => blocker.reset?.()}>No</CancelButton>
                  <RoundedButton onClick={() => blocker.proceed?.()}>Yes</RoundedButton>
                </FlexRow.Container>
              </PromptLayout.FooterSection>
            </PromptLayout.Content>
          </DarkCard>
        </PromptLayout.Prompt>
      </PortalOverlay>
    </Portal>
  );

  return <>{blocker.state == "blocked" && prompt}</>;
};

export interface WindowUnloadListenerProps {
  children?: any;
  isModify: boolean;
}

export default WindowUnloadListener;
