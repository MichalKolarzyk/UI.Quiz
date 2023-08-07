export interface IGetUserProfileResponse {
  id: string;
  accountId: string;
  image: string;
  userName: string;
  userProfileWorkspaces: Array<IUserProfileWorkspace>;
}

export interface IUserProfileWorkspace {
  name: string;
  workspaceId: string;
}
