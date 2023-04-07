export interface ISignInRequest {
  login: string;
  password: string;
}

export interface ISignInResponse {
  token: string;
  expires: Date;
}

export interface IRegisterRequest {
  login: string;
  password: string;
  repetePassword: string,
}

export interface IRegisterResponse {}

export interface IGetUserProfileResponse {
  id: string;
  accountId: string;
  image: string;
  userName: string;
  userProfileWorkspaces: Array<IUserProfileWorkspace>
}

export interface IUserProfileWorkspace{
  name: string;
  workspaceId: string;
}

export interface IGetQuizesRequest{
  workspaceId: string;
}

export interface IGetQuizesResponse{
  quizes: Array<IQuiz>
}

export interface IQuiz{
  id: string;
  questionIds : Array<string>;
  themeId: string;
  workspaceId: string;
}

export interface Question{
  id: string,
  description: string,
  answers: Array<string>,
  correctAnswerIndex: number,
  isPrivate: boolean,
  category: string,
  defaultLanugage: string,
  author: string,
  canUserEdit: boolean,
}

export interface CreateQuestionRequest{
  question: string,
  answers: Array<string>,
  correctAnswerIndex: number,
  isPrivate: boolean,
  category: string,
  defaultLanugage: string
}

export interface CreateQuestionResponse{
  id: string,
}

export interface UpdateQuestionRequest{
  id: string,
  question: string,
  answers: Array<string>,
  correctAnswerIndex: number,
  isPrivate: boolean,
  category: string,
  defaultLanugage: string
}

export interface FilterQuestionsRequest{
  take: number,
  skip: number,
  isPrivate: boolean,
  author: string,
}

export interface FilterQuestionResponse{
  questions: Array<Question>,
  count: number,
}

export interface IErrorResponse {
  errors: any;
}
