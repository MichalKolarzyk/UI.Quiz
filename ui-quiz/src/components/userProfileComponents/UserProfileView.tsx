import { IUserProfileViewModel } from "./IUserProfileViewModel";

const UserProfileView = (props: UserProfileViewProps) => {
  return (
    <div>
      <div>{props.viewModel.userProfile?.userName ?? "Not loaded yet"}</div>
      <div>{props.viewModel.userProfile?.id ?? "Not loaded yet"}</div>
      <div>{props.viewModel.userProfile?.accountId ?? "Not loaded yet"}</div>
    </div>
  );
};

export interface UserProfileViewProps {
  viewModel: IUserProfileViewModel;
}

export default UserProfileView;
