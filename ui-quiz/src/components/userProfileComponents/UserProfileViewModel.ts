import { useEffect, useState } from "react";
import IUseQuizApi from "../../applicationHooks/useQuizApis/IUseQuizApi";
import { IGetUserProfileResponse } from "../../infrastructure/apiQuiz/ApiQuizModels";
import { IUserProfileViewModel } from "./IUserProfileViewModel";

const UserProfileViewModel = (props: UserProfileViewModelProps) => {
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if(props.useQuizApi.isLogIn){
            props.useQuizApi.fetchUserProfile(() => {}, (e) => {console.log(e)}, () => {setDisabled(false)});
            setDisabled(true);
        }
    },[props.useQuizApi.isLogIn])

    return {
        userProfile : props.useQuizApi.userProfile,
        disabled,
    } as IUserProfileViewModel
}

export interface UserProfileViewModelProps{
    useQuizApi: IUseQuizApi
}

export default UserProfileViewModel;