const TableHeader = (props: TableHeaderProps) => {
  return <tr {...props}></tr>;
};

export interface TableHeaderProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {}

export default TableHeader;
