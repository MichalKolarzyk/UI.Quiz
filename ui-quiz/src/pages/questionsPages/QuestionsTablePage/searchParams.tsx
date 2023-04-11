import { useSearchParams } from "react-router-dom";

export const useQuestionsSearchParams = () => {
  let [params, setParams] = useSearchParams();

  const setIsPrivate = (newState: boolean) => {
    setParams((prev) => {
      prev.set("isPrivate", newState.toString());
      return prev;
    });
  };

  const setPage = (page: number) => {
    setParams((prev) => {
      prev.set("page", page.toString());
      return prev;
    });
  };

  const setAuthor = (value: string) => {
    setParams((prev) => {
      prev.set("author", value);
      return prev;
    });
  };

  const setCategory = (value: string) => {
    setParams((prev) => {
      prev.set("category", value);
      return prev;
    });
  };

  const getBoolen = (str: string | null) : boolean | null => {
    if(str == "true"){
      return true;
    }
    if(str == null){
      return null
    }
    return false;
  }

  return {
    isPrivate: getBoolen(params.get("isPrivate")),
    setIsPrivate,
    page: parseInt(params.get("page") ?? "1"),
    setPage,
    author: params.get("author"),
    setAuthor,
    category: params.get("category"),
    setCategory,
  };
};

export interface QuestionsSearchParams {
  isPrivate: boolean;
}
