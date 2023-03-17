import { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import useQuizApi from "../apis/apiQuiz/useQuizApi";
import { setUser } from "../reducers/userReducer";
import { RootState } from "../store/store";

const useUserActions = () => {
    const dispach = useDispatch();
    const quizApi = useQuizApi();
    const token = useSelector((state: RootState) => state.account.token);
    const user = useSelector((state: RootState) => state.user);

    const [disabled, setDisabled] = useState<boolean>(false);

    const fetchUser = () => {
        const fetchUserAsync = async () => {
            setDisabled(true);
            const response = await quizApi.getUserProfile(token ?? "");
            const user = response.data;

            dispach(setUser({
                id: user.id,
                accountId: user.accountId,
                userName: user.userName,
            }))
            setDisabled(false);
        }
        fetchUserAsync();
    }


    return {
        fetchUser,
        disabled,
        user,
    }
}

export default useUserActions;