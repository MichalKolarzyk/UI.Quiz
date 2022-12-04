export interface ISignInRequest{
    login: string;
    password: string;
}

export interface ISignInResponse{
    token: string;
}

export interface IGetUserProfileResponse{
    id: string,
    accountId: string,
    image: string,
    userName: string,
    userProfileWorkspaces: [
      {
        name: string,
        workspaceId: string,
      }
    ]
}

export interface IErrorResponse{
    errors: any
}
