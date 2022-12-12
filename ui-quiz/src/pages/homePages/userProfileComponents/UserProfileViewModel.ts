import IUseQuizApi from "../../../applicationHooks/useQuizApis/IUseQuizApi";
import { IUserProfileViewModel } from "./IUserProfileViewModel";

const UserProfileViewModel = (props: UserProfileViewModelProps) => {
    const disabled = props.useQuizApi.isBusy;

    return {
        userProfile : props.useQuizApi.userProfile,
        disabled,
    } as IUserProfileViewModel
}

export interface UserProfileViewModelProps{
    useQuizApi: IUseQuizApi
}

export default UserProfileViewModel;