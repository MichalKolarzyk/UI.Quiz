import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useQuizApi from "../apis/apiQuiz/useQuizApi";
import useBrowserCache from "../infrastructure/useBrowserCaches/useBrowserCache";
import { setIsLogIn, setToken } from "../reducers/accountReducer";
import { RootState } from "../store/store";

const useAccountActions = () => {
    const [usertokenInCache, setUserTokenInCache] = useBrowserCache<string>("USEQUIZAPI_ISIGNINRESPONSE");
    const dispach = useDispatch();
    const isLogIn = useSelector((store: RootState) => store.account.isLogIn);
    const nav = useNavigate();

    const quizApi = useQuizApi();

    const loginUser = (login: string, password: string) => {
        const loginUserAsync = async () => {
            const response = await quizApi.signIn({login, password})
            const newToken = response.data.token;
            dispach(setToken(newToken));
            setUserTokenInCache(newToken);
            dispach(setIsLogIn(true))
            nav("/home");
        }
        loginUserAsync();
    }

    const signOut = () => {
        dispach(setToken(""));
        setUserTokenInCache("");
        dispach(setIsLogIn(false))
    }

    const fetchUserTokenFromCache = () => {
        dispach(setToken(usertokenInCache));
        if(usertokenInCache != undefined && usertokenInCache != null && usertokenInCache != ""){
            dispach(setIsLogIn(true))
        }
        else{
            dispach(setIsLogIn(false))
        }
    }

    return {
        loginUser,
        signOut,
        fetchUserTokenFromCache,
        isLogIn,
    }
}

export default useAccountActions;