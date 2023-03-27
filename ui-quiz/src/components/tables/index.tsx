import { EdiiButton } from "../buttons";
import Table, { TableProps } from "./table/Table";
import TableCell from "./table/TableCell";
import TableHeader from "./table/TableHeader";
import TableHeaderCell from "./table/TableHeaderCell";
import TableRow from "./table/TableRow";

export const QuestionsTable: React.FC<QuestionsTableProps> = (props) => {
  return (
    <Table>
      <TableHeader>
        <TableHeaderCell>#</TableHeaderCell>
        <TableHeaderCell>Author</TableHeaderCell>
        <TableHeaderCell>Category</TableHeaderCell>
        <TableHeaderCell>Approved</TableHeaderCell>
        <TableHeaderCell>Default language</TableHeaderCell>
        <TableHeaderCell>Question</TableHeaderCell>
        <TableHeaderCell>Edit</TableHeaderCell>
      </TableHeader>
      {props.items.map((item, index) => {
        return (
          <TableRow>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.author}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.approved}</TableCell>
            <TableCell>{item.defaultLanguage}</TableCell>
            <TableCell>{item.question}</TableCell>
            <TableCell>
              <EdiiButton onClick={() => props.onEditClick(item)} />
            </TableCell>
          </TableRow>
        );
      })}
    </Table>
  );
};

export interface QuestionsTableProps extends TableProps {
  onEditClick: (row: QuestionRow) => void;
  items: Array<QuestionRow>;
}

export interface QuestionRow {
  id: string;
  author: string;
  category: string;
  approved: number;
  defaultLanguage: string;
  question: string;
}
