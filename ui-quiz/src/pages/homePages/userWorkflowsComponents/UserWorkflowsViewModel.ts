import IUseQuizApi from "../../../applicationHooks/useQuizApis/IUseQuizApi"
import IUserWorkflowsViewModel from "./IUserWorkflowsViewModel"

const UserWorkflowsViewModel = (props: UserWorkflowsViewModelProps) => {
    const useQuizApi = props.useQuizApi;
    return {
        userProfileWorkspaces : useQuizApi.userProfile?.userProfileWorkspaces,
    } as IUserWorkflowsViewModel
}

export interface UserWorkflowsViewModelProps{
    useQuizApi: IUseQuizApi;
}

export default UserWorkflowsViewModel