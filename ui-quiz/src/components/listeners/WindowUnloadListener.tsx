import { useEffect } from "react";
import { unstable_useBlocker as useBlocker } from "react-router-dom";
import { Content, FooterSection, Prompt, TitleSection } from "../../layouts/PromptLayout";
import { CancelButton, RoundedButton } from "../buttons";
import { DarkCard } from "../cards";
import { Portal, PortalOverlay } from "../portals";

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
        <Prompt>
          <DarkCard>
            <Content >
              <TitleSection>
                <h4>Do you want to leave changes?</h4>
              </TitleSection>
              <FooterSection>
                <CancelButton onClick={() => blocker.reset?.()}>No</CancelButton>
                <RoundedButton onClick={() => blocker.proceed?.()}>Yes</RoundedButton>
              </FooterSection>
            </Content>
          </DarkCard>
        </Prompt>
      </PortalOverlay>
    </Portal>
  );

  return (
    <>
      {blocker.state == "blocked" && prompt}
      {props.children}
    </>
  );
};

export interface WindowUnloadListenerProps {
  children?: any;
  isModify: boolean;
}

export default WindowUnloadListener;
