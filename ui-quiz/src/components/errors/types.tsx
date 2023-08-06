export interface ErrorMessageProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  message?: string;
  onClear?: () => void;
}