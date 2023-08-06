export interface SwitchProps {
    label?: string;
    value?: boolean | null;
    onChange?: (newState: boolean) => void;
    disabled?: boolean
  }