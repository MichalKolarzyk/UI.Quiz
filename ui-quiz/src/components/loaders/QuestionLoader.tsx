import { useEffect, useState } from "react";
import LoadingPage from "../../pages/loadingPages/LoadingPage";
import { LoaderProps, LoaderState } from "./base";
import { useAppDispatch } from "../../store/store";
import { getQuestionById } from "../../reducers/questionReducers/asyncActions";
import { useSelector } from "react-redux";
import { questionStateSelector } from "../../reducers/questionReducers/selectors";

const QuestionLoader :React.FC<QuestionLoaderProps> = (props) => {
    const [state, setState] = useState<LoaderState>(LoaderState.ready);
    const appDispatch = useAppDispatch();
    const {question} = useSelector(questionStateSelector)

    useEffect(() => {
      const setupAsync = async () => {
        appDispatch(getQuestionById(props.questionId ?? ""))
      };
      if(state != LoaderState.ready){
        return;
      }
      setState(LoaderState.inProgress)
      setupAsync();
    }, []);

    useEffect(() => {
      if(question != undefined){
        setState(LoaderState.done);
      }
    }, [question]);
  
    if (state != LoaderState.done) {
      return <LoadingPage />;
    }

    return props.children
}

export interface QuestionLoaderProps extends LoaderProps{
  questionId?: string,
}

export default QuestionLoader;