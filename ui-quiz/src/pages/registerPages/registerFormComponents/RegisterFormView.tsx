import FormInput from "../../../components/inputs/formInputs/FormInput";
import { IRegisterFormViewModel } from "./IRegisterFormViewModel";

const RegisterFormView = (props: RegisterFormViewProps) => {
  const viewModel = props.viewModel;
  

  return (
    <div>
        <FormInput disabled={viewModel.disabled} placeholder="login" value={viewModel.login} onChange={(event) => viewModel.setLogin(event.target.value)}/>
        <FormInput disabled={viewModel.disabled} type="password" placeholder="password" value={viewModel.password} onChange={(event) => viewModel.setPassword(event.target.value)}/>
        <FormInput disabled={viewModel.disabled} type="password" placeholder="repete password" value={viewModel.repetePassword} onChange={(event) => viewModel.setRepetePassword(event.target.value)}/>

        <button disabled={viewModel.disabled} className="button" onClick={viewModel.submit}>Register</button>
    </div>
  );
};

export interface RegisterFormViewProps {
  viewModel: IRegisterFormViewModel;
}

export default RegisterFormView;
