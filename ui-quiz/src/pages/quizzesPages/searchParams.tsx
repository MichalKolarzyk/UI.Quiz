import { useSearchParams } from "react-router-dom";

const useQuizzesSearchParams = () => {
    let [params, setParams] = useSearchParams();

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

  
    return {
      page: parseInt(params.get("page") ?? "1"),
      setPage,
      author: params.get("author"),
      setAuthor,
      category: params.get("category"),
      setCategory,
    };
}

export default useQuizzesSearchParams;