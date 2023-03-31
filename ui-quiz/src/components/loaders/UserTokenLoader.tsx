import { useDispatch, useSelector } from "react-redux";
import useBrowserCache from "../../hooks/useBrowserCache";
import { accountStateSelector } from "../../reducers/accountReducers/selectors";
import { useEffect, useState } from "react";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import LoadingPage from "../../pages/loadingPages/LoadingPage";
import { setToken } from "../../reducers/accountReducers/slice";
import { LoaderProps } from "./base";

const UserTokenLoader :React.FC<LoaderProps> = (props) => {
    const [usertokenInCache, setUserTokenInCache] = useBrowserCache<string>("USEQUIZAPI_ISIGNINRESPONSE");
    const [isLoaded, setIsLoaded] = useState(false);
    const dispach = useDispatch();
    const { token } = useSelector(accountStateSelector);

  
    useEffect(() => {
      dispach(setToken(usertokenInCache));
    }, []);
  
    useEffect(() => {
      const setupAsync = async () => {
        setUserTokenInCache(token ?? "");
        ApiQuizInstance.setJWT(token);
        if (token != undefined) {
          await ApiQuizInstance.getUserProfile();
        }
        setIsLoaded(true);
      };
      setupAsync();
    }, [token]);
  
    if (!isLoaded) {
      return <LoadingPage />;
    }

    return props.children
}

export default UserTokenLoader;