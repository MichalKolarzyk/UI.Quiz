const TableRow = (props: TableRowProps) => {
    return (
      <tr {...props}>
      </tr>
    );
  };
  
  export interface TableRowProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>{
      cells?: Array<string>
  }
  
  export default TableRow;