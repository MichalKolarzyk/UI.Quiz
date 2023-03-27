import { EdiiButton } from "../buttons";
import Table, { TableProps } from "./table/Table";
import TableCell from "./table/TableCell";
import TableHeader from "./table/TableHeader";
import TableHeaderCell from "./table/TableHeaderCell";
import TableRow from "./table/TableRow";
import classes from './table/Table.module.scss'

export const QuestionsTable: React.FC<QuestionsTableProps> = (props) => {
  return (
    <Table>
      <TableHeader>
        <TableHeaderCell className={classes['small-column']}>#</TableHeaderCell>
        <TableHeaderCell>Author</TableHeaderCell>
        <TableHeaderCell>Category</TableHeaderCell>
        <TableHeaderCell>Approved</TableHeaderCell>
        <TableHeaderCell>Default language</TableHeaderCell>
        <TableHeaderCell>Question</TableHeaderCell>
        <TableHeaderCell className={classes['small-column']}>Edit</TableHeaderCell>
      </TableHeader>
      {props.items.map((item, index) => {
        return (
          <TableRow key={index}>
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


export const QuizzesTable: React.FC<QuizzesTableProps> = (props)  => {
  return (
    <Table>
      <TableHeader>
        <TableHeaderCell className={classes['small-column']}>#</TableHeaderCell>
        <TableHeaderCell>Author</TableHeaderCell>
        <TableHeaderCell>Category</TableHeaderCell>
        <TableHeaderCell>Approved</TableHeaderCell>
        <TableHeaderCell>Questions number</TableHeaderCell>
        <TableHeaderCell className={classes['small-column']}>Edit</TableHeaderCell>
      </TableHeader>
      {props.items.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.author}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.approved}</TableCell>
            <TableCell>{item.defaultLanguage}</TableCell>
            <TableCell>
              <EdiiButton onClick={() => props.onEditClick(item)} />
            </TableCell>
          </TableRow>
        );
      })}
    </Table>
  );
}

export interface QuizzesTableProps extends TableProps {
  onEditClick: (row: QuizRow) => void;
  items: Array<QuizRow>;
}

export interface QuizRow {
  id: string;
  author: string;
  category: string;
  approved: number;
  defaultLanguage: string;
  question: string;
}


export const SessionsTable: React.FC<SessionsTableProps> = (props) => {
  return (
    <Table>
      <TableHeader>
        <TableHeaderCell className={classes['small-column']}>#</TableHeaderCell>
        <TableHeaderCell>Author</TableHeaderCell>
        <TableHeaderCell>Category</TableHeaderCell>
        <TableHeaderCell>Approved</TableHeaderCell>
        <TableHeaderCell>Default language</TableHeaderCell>
        <TableHeaderCell>Question</TableHeaderCell>
        <TableHeaderCell className={classes['small-column']}>Edit</TableHeaderCell>
      </TableHeader>
      {props.items?.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.state}</TableCell>
            <TableCell>{item.assignUsers}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.defaultLanguage}</TableCell>
            <TableCell>{item.defaultLanguage}</TableCell>
            <TableCell>
              <EdiiButton onClick={() => props.onEditClick(item)} />
            </TableCell>
          </TableRow>
        );
      })}
    </Table>
  );
};

export interface SessionsTableProps extends TableProps {
  onEditClick: (row: SessionRow) => void;
  items?: Array<SessionRow>;
}

export interface SessionRow {
  id: string;
  state: string;
  assignUsers: string;
  category: number;
  startTime: string;
  defaultLanguage: string;
}
