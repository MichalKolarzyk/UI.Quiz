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

      const setAuthor = (author: string) => {
        setParams(prev => {
            prev.set("author", author)
            return prev;
          })
      }

    return{
        isPrivate: params.get("isPrivate") == "true",
        setIsPrivate,
        page: parseInt(params.get("page") ?? "1"),
        setPage,
        author: params.get("author") ?? "",
        setAuthor,
    }
}

export interface QuestionsSearchParams{
    isPrivate: boolean
}