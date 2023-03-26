const TableHeader = (props: TableHeaderProps) => {
  return (
    <tr>
      {props.countColumn && <th>#</th>}
      {props.columns.map(c => <th>{c}</th>)}
      {/* <th>#</th>
      <th>Author</th>
      <th>Category</th>
      <th>Approved</th>
      <th>Default language</th>
      <th>Question</th>
      <th>Edit</th> */}
    </tr>
  );
};

export interface TableHeaderProps{
    columns: Array<string>
    countColumn?: boolean
}

export default TableHeader;

