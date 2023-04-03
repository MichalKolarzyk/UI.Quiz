import { Children } from "react";
import classes from "./Table.module.scss";

const Table = (props: TableProps) => {
  return (
    <table className={classes.table} {...props}>
    </table>
  );
};

export interface TableProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    skip?: number
  }

export default Table;
