import { useContext } from "react"
import PromptContext from "./PromptContext"

const usePrompt = () => {
    const context = useContext(PromptContext);

    const show = (title: string, content?: any) => {
        context.setTitle(title);
        context.setContent(content);
        context.setIsVisible(true);
        console.log(context.isVisible)
    }

    const hide = () => {
        context.setIsVisible(false)
    }

    return{
        show,
        hide,
    }
}

export default usePrompt;