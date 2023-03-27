const TableHeaderCell : React.FC<TableHeaderCellProps> = (props) => {
    return <th {...props}></th>
}

export interface TableHeaderCellProps extends React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>{

}

export default TableHeaderCell;