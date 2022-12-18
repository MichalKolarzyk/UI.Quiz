import { useParams } from "react-router-dom";

const WorkspacePage = () => {
    const { workspaceId } = useParams();

    return <div>{workspaceId}</div>
}

export default WorkspacePage;