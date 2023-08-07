import { IDisabled, ISingleValue } from "../base/types";

export interface SwitchProps extends ISingleValue<boolean>, IDisabled {
  label?: string;
}
