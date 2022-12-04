import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import useQuizApi from "../../applicationHooks/useQuizApis/useQuizApi";
import HomePage from "../../components/homePages/HomePage";
import LoginFormViewModel from "../../components/loginFormComponents/LoginFormViewModel";
import LoginPage from "../../components/loginPages/LoginPage";

const AppRouter = () => {
    const quizApi = useQuizApi()
    const lovinFormViewModel = LoginFormViewModel({useQuizApi: quizApi});
    
    return <BrowserRouter>
        <Routes>
            <Route path="*" element= {<Navigate to="/login"/>}/>
            <Route path="/login" element={<LoginPage loginFormViewModel={lovinFormViewModel} useQuizApi={quizApi}/>}/>
            <Route path="/home" element={<HomePage useQuizApi={quizApi}/>}/>
        </Routes>
    </BrowserRouter>
}

export default AppRouter;