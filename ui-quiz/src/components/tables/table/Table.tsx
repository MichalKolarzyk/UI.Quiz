import classes from "./Table.module.scss";

const Table = (props: TableProps) => {
  return (
    <table className={classes.table}>
      <tr>
        <th>#</th>
        <th>Author</th>
        <th>Category</th>
        <th>Approved</th>
        <th>Default language</th>
        <th>Question</th>
        <th>Edit</th>
      </tr>
      <tr>
        <th>1</th>
        <th>Majkel23</th>
        <th>Math</th>
        <th>12</th>
        <th>Pl</th>
        <th>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna sed felis condimentum</th>
        <th>/</th>
      </tr>
      <tr>
        <th>2</th>
        <th>Majkel23</th>
        <th>Math</th>
        <th>12</th>
        <th>Pl</th>
        <th>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna sed felis condimentum</th>
        <th>/</th>
      </tr>
    </table>
  );
};

export interface TableProps {}

export default Table;
