import { useNavigate } from "react-router-dom";
import { IRegisterFormViewModel } from "./registerFormComponents/IRegisterFormViewModel";
import RegisterFormView from "./registerFormComponents/RegisterFormView";

const RegisterPage = (props: RegisterPageProps) => {
    const navigate = useNavigate();

    return <div className="register-page position">
        <div className="position__centered">
            <span className="h3 u-color-white">Create your new account! </span>
            <div className="card--white">
                <RegisterFormView viewModel={props.registerFormViewModel}/>
            </div>
            <span className="h3 u-color-white">Already have account? </span>
            <button onClick={() => navigate('/login')} className="button--transparent">Sign in</button>
        </div>
        <div className="position__top-left">
        </div>
    </div>
}

export interface RegisterPageProps{
    registerFormViewModel: IRegisterFormViewModel;
}

export default RegisterPage;