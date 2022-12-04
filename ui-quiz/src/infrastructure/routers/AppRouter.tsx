import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import useQuizApi from "../../applicationHooks/useQuizApis/useQuizApi";
import HomePage from "../../components/homePages/HomePage";
import LoginFormViewModel from "../../components/loginFormComponents/LoginFormViewModel";
import LoginPage from "../../components/loginPages/LoginPage";
import UserProfileViewModel from "../../components/userProfileComponents/UserProfileViewModel";

const AppRouter = () => {
    const quizApi = useQuizApi()
    const loginFormViewModel = LoginFormViewModel({useQuizApi: quizApi});
    const userProfileViewModel = UserProfileViewModel({useQuizApi: quizApi})
    
    return <BrowserRouter>
        <Routes>
            <Route path="*" element= {<Navigate to="/login"/>}/>
            <Route path="/login" element={<LoginPage loginFormViewModel={loginFormViewModel} useQuizApi={quizApi}/>}/>
            <Route path="/home" element={<HomePage userProfileViewModel={userProfileViewModel} useQuizApi={quizApi} />}/>
        </Routes>
    </BrowserRouter>
}

export default AppRouter;