import { useAppDispatch } from "../store/store";
import { setToken } from "../reducers/accountReducers/slice";
import { useSelector } from "react-redux";
import { accountStateSelector } from "../reducers/accountReducers/selectors";

const useToken = () => {
    const dispatch = useAppDispatch();
    const { token } = useSelector(accountStateSelector);

    const set = (token: string) => {
        dispatch(setToken(token));
    }

    const get = (): string => {
        return token ?? "";
    }

    const isActive = () : boolean => {
        return token != "" && token != undefined && token != null
    }

    const clear = () => {
        set("");
    }

    return {
        set,
        get,
        isActive,
        clear,
    }
}

export default useToken