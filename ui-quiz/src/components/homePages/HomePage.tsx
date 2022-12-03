import { Navigate } from "react-router-dom";
import IuseQuizApi from "../../applicationHooks/useQuizApis/IUseQuizApi";
import useQuizApi from "../../applicationHooks/useQuizApis/useQuizApi";

const HomePage = (props: HomePageProps) => {
  const quizApi = props.useQuizApi//useQuizApi();

  console.log(quizApi.isLogIn);

  if(!quizApi.isLogIn){
      return <Navigate to="/login"/>
  }

  return (
    <div>
      <div>HOMPE PAGE</div>
      <button onClick={quizApi.singOut}>Sing out</button>
    </div>
  );
};

export interface HomePageProps {
  useQuizApi: IuseQuizApi;
}

export default HomePage;
