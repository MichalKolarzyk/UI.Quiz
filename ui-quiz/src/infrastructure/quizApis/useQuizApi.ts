import IQuizApi from "./IQuizApi";

const useQuizApi = () => {
    const login = () => {
        console.log("Login ...")
    }

    return{
        login
    }as IQuizApi;
}

export default useQuizApi;