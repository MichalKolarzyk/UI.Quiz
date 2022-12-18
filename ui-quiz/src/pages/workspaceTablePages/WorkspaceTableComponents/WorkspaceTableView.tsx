import FormInput from "../../../components/inputs/formInputs/FormInput";

const WorkspaceTableView = () => {
  return (
    <div className="table">
      <div className="table__description u-color-white h3">Your workspaces</div>
      <div className="table__actions">
        <button className="button--submit">Create workspace</button>
      </div>
      <div className="table__filters flex--row u-gap-small">
        <p className="u-color-white"></p>
        <FormInput placeholder="Name" />
      </div>
      <div className="table__items h1">item</div>
    </div>
  );
};

export default WorkspaceTableView;
