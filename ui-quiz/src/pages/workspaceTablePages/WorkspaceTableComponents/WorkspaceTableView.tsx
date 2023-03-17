import FormInput from "../../../components/inputs/formInputs/FormInput";

const WorkspaceTableView = () => {
  return (
    <div className="card card--white">
      <div className="workspaces">
        <div className="workspaces__header">
          <div className="workspaces__header__description h2">
            Your workspaces
          </div>
          <div className="workspaces__header__actions">
            <button className="button button--submit">Create workspace</button>
          </div>
        </div>
        <div className="workspaces__search">
          <FormInput placeholder="Name" />
        </div>
        <div className="workspaces__items">
          <div className="workspaces__item">
            <input type="radio" className="workspaces__item__radio"/>
            <div className="workspaces__item__name h3">
              workspace name
            </div>
            <button className="button workspaces__item__goto">
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceTableView;
