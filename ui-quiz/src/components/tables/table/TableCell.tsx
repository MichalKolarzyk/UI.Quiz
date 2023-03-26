const TableCell = (props: TableCellProps) => {
    return (
      <td {...props}></td>
    );
  };
  
  export interface TableCellProps extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> {}
  
  export default TableCell;