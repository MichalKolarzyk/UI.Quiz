import { IError } from "../base/types";

export interface ErrorMessageProps extends IError{
  onClear?: () => void;
}