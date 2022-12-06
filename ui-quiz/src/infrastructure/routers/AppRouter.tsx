import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import useQuizApi from "../../applicationHooks/useQuizApis/useQuizApi";
import HomePage from "../../pages/homePages/HomePage";
import LoginFormViewModel from "../../pages/loginPages/loginFormComponents/LoginFormViewModel";
import LoginPage from "../../pages/loginPages/LoginPage";
import UserProfileViewModel from "../../pages/homePages/userProfileComponents/UserProfileViewModel";
import UserProfileView from "../../pages/homePages/userProfileComponents/UserProfileView";
import RegisterPage from "../../pages/registerPages/RegisterPage";
import RegisterFormViewModel from "../../pages/registerPages/registerFormComponents/RegisterFormViewModel";

const AppRouter = () => {
    const quizApi = useQuizApi()
    const loginFormViewModel = LoginFormViewModel({useQuizApi: quizApi});
    const userProfileViewModel = UserProfileViewModel({useQuizApi: quizApi})
    const registerPageViewModel = RegisterFormViewModel({useQuizApi: quizApi})
    
    return <BrowserRouter>
        <Routes>
            <Route path="*" element= {<Navigate to="/login"/>}/>
            <Route path="/login" element={<LoginPage loginFormViewModel={loginFormViewModel} useQuizApi={quizApi}/>}/>
            <Route path="/register" element={<RegisterPage registerFormViewModel={registerPageViewModel}/>}/>
            <Route path="/home" element={<HomePage userProfileViewModel={userProfileViewModel} useQuizApi={quizApi} />}>
                <Route path="profile" element={<UserProfileView viewModel={userProfileViewModel}/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default AppRouter;