import { IUserProfileWorkspace } from "../../../infrastructure/apiQuiz/ApiQuizModels";
import IUserWorkflowsViewModel from "./IUserWorkflowsViewModel";

const UserWorkflowsView = (props: UserWorkflowsViewProps) => {
    const workspaces = props.viewModel?.userProfileWorkspaces;
    const viewModel = props.viewModel;

    const workspacesView = workspaces?.map(w => <button onClick={() => props.onWorkspaceClick?.(w)}>{w.name}</button>)
    return <div className="card--white">
        {workspacesView}
    </div>
}

export interface UserWorkflowsViewProps{
    viewModel: IUserWorkflowsViewModel
    onWorkspaceClick?: (workspace: IUserProfileWorkspace) => void;
}

export default UserWorkflowsView;