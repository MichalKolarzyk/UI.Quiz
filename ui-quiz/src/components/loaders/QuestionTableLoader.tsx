import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingPage from "../../pages/loadingPages/LoadingPage";
import { getQuestions } from "../../reducers/questionReducers/asyncActions";
import { questionStateSelector } from "../../reducers/questionReducers/selectors";
import { useAppDispatch } from "../../store/store";
import { LoaderProps, LoaderState } from "./base";

const QuestionTableLoader: React.FC<LoaderProps> = (props) => {
  const [state, setState] = useState<LoaderState>(LoaderState.ready);
  const appDispatch = useAppDispatch();
  const { questions, questionsFilter } = useSelector(questionStateSelector);

  const setupAsync = async () => {
    appDispatch(getQuestions(questionsFilter));
  };

  useEffect(() => {
    if (state != LoaderState.ready) {
      return;
    }
    setupAsync();
  }, []);

  useEffect(() => {
    if (questions != undefined) {
      setState(LoaderState.done);
    }
  }, [questions]);

  useEffect(() => {
    setState(LoaderState.ready);
    setupAsync();
  }, [questionsFilter])

  // if (state != LoaderState.done) {
  //   return <LoadingPage />;
  // }

  return props.children;
};


export default QuestionTableLoader;
