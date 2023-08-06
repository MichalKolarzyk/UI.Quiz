import { useState } from "react";
import { IPromptState } from "./PromptContext";

const PromptProvider = (): IPromptState => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  return {
    isVisible,
    setIsVisible,
    content,
    setContent,
    title,
    setTitle,
  };
};

export default PromptProvider
