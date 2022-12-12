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
  userProfileWorkspaces: [
    {
      name: string;
      workspaceId: string;
    }
  ];
}

export interface IErrorResponse {
  errors: any;
}
