import { AxiosResponse } from "axios";
import { useApiError } from "./useApiError";
import { useState } from "react";
const useApi = <TRequest, TResponse, TError>(
  promise: (request: TRequest) => Promise<AxiosResponse<TResponse>>,
  onThen?: (data: TResponse) => void,
  onCatch?: () => void
) => {
  const apiError = useApiError<TError>();
  const [isLoading, setIsLoading] = useState(false);

  const call = (request: TRequest) => {
    setIsLoading(true);
    promise(request)
      .then((data) => {
        onThen?.(data.data);
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
    fieldErrors: apiError.errors,
    errorMessage: apiError.message,
    clearErrors: apiError.restart,
    call,
  };
};

export default useApi;
