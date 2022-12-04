import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import useQuizApi from "../../applicationHooks/useQuizApis/useQuizApi";
import HomePage from "../../components/homePages/HomePage";
import LoginFormViewModel from "../../components/loginFormComponents/LoginFormViewModel";
import LoginPage from "../../components/loginPages/LoginPage";
import UserProfileViewModel from "../../components/userProfileComponents/UserProfileViewModel";
import UserProfileView from "../../components/userProfileComponents/UserProfileView";
import RegisterPage from "../../components/registerPages/RegisterPage";

const AppRouter = () => {
    const quizApi = useQuizApi()
    const loginFormViewModel = LoginFormViewModel({useQuizApi: quizApi});
    const userProfileViewModel = UserProfileViewModel({useQuizApi: quizApi})
    
    return <BrowserRouter>
        <Routes>
            <Route path="*" element= {<Navigate to="/login"/>}/>
            <Route path="/login" element={<LoginPage loginFormViewModel={loginFormViewModel} useQuizApi={quizApi}/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/home" element={<HomePage userProfileViewModel={userProfileViewModel} useQuizApi={quizApi} />}>
                <Route path="profile" element={<UserProfileView viewModel={userProfileViewModel}/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default AppRouter;