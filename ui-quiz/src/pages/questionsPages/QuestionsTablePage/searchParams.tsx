import { useSearchParams } from "react-router-dom"

export const useQuestionsSearchParams = () => {
    let [params, setParams] = useSearchParams();

    const setIsPrivate = (newState: boolean) => {
        setParams(prev => {
          prev.set("isPrivate", newState.toString())
          return prev;
        })
      };

      const setPage = (page: number) => {
        setParams(prev => {
            prev.set("page", page.toString())
            return prev;
          })
      }

    return{
        isPrivate: params.get("isPrivate") == "true",
        setIsPrivate,
        page: parseInt(params.get("page") ?? "1"),
        setPage
    }
}

export interface QuestionsSearchParams{
    isPrivate: boolean
}