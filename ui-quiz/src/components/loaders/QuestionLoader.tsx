import { useEffect, useState } from "react";
import LoadingPage from "../../pages/loadingPages/LoadingPage";
import { LoaderProps } from "./base";
import { useAppDispatch } from "../../store/store";
import { getQuestionById } from "../../reducers/questionReducers/asyncActions";
import { useSelector } from "react-redux";
import { questionStateSelector } from "../../reducers/questionReducers/selectors";

const QuestionLoader :React.FC<QuestionLoaderProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const appDispatch = useAppDispatch();
    const {question} = useSelector(questionStateSelector)

    useEffect(() => {
      const setupAsync = async () => {
        appDispatch(getQuestionById(props.questionId ?? ""))
      };
      if(question?.id != undefined && question.id == props.questionId){
        return;
      }
      setupAsync();
    }, []);

    useEffect(() => {
      if(question != undefined){
        setIsLoaded(true);
      }
    }, [question]);
  
    if (!isLoaded) {
      return <LoadingPage />;
    }

    return props.children
}

export interface QuestionLoaderProps extends LoaderProps{
  questionId?: string,
}

export default QuestionLoader;