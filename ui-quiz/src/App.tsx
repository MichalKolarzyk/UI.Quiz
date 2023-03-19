import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApiQuizInstance from "./apis/apiQuiz/ApiQuizInstance";
import useBrowserCache from "./hooks/useBrowserCache";
import LoadingPage from "./pages/loadingPages/LoadingPage";
import { seletToken } from "./reducers/accountReducers/selectors";
import { setToken } from "./reducers/accountReducers/slice";
import AppRouter from "./routers/AppRouter";

const App = () => {
    const [appLoaded, setAppLoaded] = useState(false);

    const [usertokenInCache, setUserTokenInCache] = useBrowserCache<string>("USEQUIZAPI_ISIGNINRESPONSE");
    
    const dispach = useDispatch();

    const token = useSelector(seletToken);

    useEffect(() => {
        dispach(setToken(usertokenInCache));
    }, [])

    useEffect(() => {
        const setupAsync = async () => {
            setUserTokenInCache(token ?? "");
            ApiQuizInstance.setJWT(token);
            if(token != undefined){
                await ApiQuizInstance.getUserProfile();
            }
            setAppLoaded(true);
        }
        setupAsync();
    },[token])

    if(!appLoaded){
        return <LoadingPage/>
    }
    
    return <AppRouter/>
}

export default App;