export interface ISignInRequest {
  login: string;
  password: string;
}

export interface ISignInResponse {
  token: string;
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

export interface IErrorResponse {
  errors: any;
}
