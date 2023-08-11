import { QuestionError } from "../../reducers/questionReducers/slice";
import ApiQuizInstance from "./ApiQuizInstance";
import useApi from "../utils/useApi";
import { CreateQuestionError, CreateQuestionRequest, CreateQuestionResponse } from "./models/CreateQuestion";
import { IRegisterError, IRegisterRequest, IRegisterResponse } from "./models/Register";
import { ISignInResponse } from "./models/SignIn";
import { GetQuestionResponse } from "./models/GetQuestion";
import { UpdateQuestionError, UpdateQuestionRequest } from "./models/UpdateQuestion";

const useSignInRequest = (onThen?: (data: ISignInResponse) => void, onCatch?: () => void) => {
  return useApi(ApiQuizInstance.signIn, onThen, onCatch);
};

const useCreateQuestionRequest = (onThen?: (data: CreateQuestionResponse) => void, onCatch?: () => void) => {
  return useApi<CreateQuestionRequest, CreateQuestionResponse, CreateQuestionError>(
    ApiQuizInstance.createQuestion,
    onThen,
    onCatch
  );
};

const useRegisterUser = (onThen: () => void, onCatch: () => void) => {
  return useApi<IRegisterRequest, IRegisterResponse, IRegisterError>(ApiQuizInstance.register, onThen, onCatch);
};

const useGetQuestionById = (onThen: (data: GetQuestionResponse) => void, onCatch?: () => void) => {
  return useApi(ApiQuizInstance.getQuestionById, onThen, onCatch)
}

const useUpdateQuestion = (onThen: () => void, onCatch?: () => void) => {
  return useApi<UpdateQuestionRequest, any, UpdateQuestionError>(ApiQuizInstance.updateQuestion, onThen, onCatch)
}

export const QuizApiRequests = {
  useSignInRequest,
  useCreateQuestionRequest,
  useRegisterUser,
  useGetQuestionById,
  useUpdateQuestion,
};

export default QuizApiRequests;
