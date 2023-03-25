import {  useEffect } from "react";

const WindowUnloadListener = (props: WindowUnloadListenerProps) => {
  const handler = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    return false;
  };

  useEffect(() => {
    window.onbeforeunload = handler
  }, []);

  return <>{props.children}</>;
};

export interface WindowUnloadListenerProps {
  children?: any;
  beforeUnload?: (event: BeforeUnloadEvent) => boolean;
}

export default WindowUnloadListener;
