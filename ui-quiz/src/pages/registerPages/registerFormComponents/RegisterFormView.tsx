import { useState } from "react";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import { IRegisterFormViewModel } from "./IRegisterFormViewModel";

const RegisterFormView = (props: RegisterFormViewProps) => {
  const viewModel = props.viewModel;
  const [login, setLogin] = useState<string>("");

  return (
    <div>
        <FormInput placeholder="login" value={login} onChange={(event) => setLogin(event.target.value)}/>
        <FormInput type="password" placeholder="password" value={login} onChange={(event) => setLogin(event.target.value)}/>
        <FormInput type="password" placeholder="repete password" value={login} onChange={(event) => setLogin(event.target.value)}/>
    </div>
  );
};

export interface RegisterFormViewProps {
  viewModel: IRegisterFormViewModel;
}

export default RegisterFormView;
