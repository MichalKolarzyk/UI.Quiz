import { AxiosResponse } from "axios";
import { useApiError } from "./useApiError";
import { useState } from "react";

const useQuizApi = <TRequest, TResponse, TError>(
  promise: (request: TRequest) => Promise<AxiosResponse<TResponse>>,
  onThen?: (data: AxiosResponse<TResponse, any>) => void,
  onCatch?: () => void
) => {
  const apiError = useApiError<TError>();
  const [isLoading, setIsLoading] = useState(false);

  const call = (request: TRequest) => {
    setIsLoading(true);
    promise(request)
      .then((data) => {
        onThen?.(data);
        apiError.restart();
      })
      .catch((error) => {
        onCatch?.();
        apiError.setError(error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    errors: apiError,
    call,
  };
};

export default useQuizApi;
