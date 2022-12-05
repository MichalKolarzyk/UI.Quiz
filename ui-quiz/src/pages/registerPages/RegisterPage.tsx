import { IRegisterFormViewModel } from "./registerFormComponents/IRegisterFormViewModel";
import RegisterFormView from "./registerFormComponents/RegisterFormView";

const RegisterPage = (props: RegisterPageProps) => {
    return <div className="register-page position">
        <div className="position__centered card--white">
            <RegisterFormView viewModel={props.registerFormViewModel}/>
        </div>
    </div>
}

export interface RegisterPageProps{
    registerFormViewModel: IRegisterFormViewModel;
}

export default RegisterPage;