import { GoBackButton } from "../../components/buttons";
import FlexRow from "../../components/flex/FlexRow";
import { Dropdown } from "../../components/dropdown";
import { SessionsTable } from "../../components/tables";
import Paginator from "../../components/tables/paginator/Paginator";
import { TextInput } from "../../components/inputs/textInput";
import useAppNavigation from "../../compoundComponents/Navigation/useAppNavigation";
import { GapRowEnum, RowPositionEnum } from "../../components/flex/types";
import { TableLayout } from "../../layouts";

const SessionsTablePage = () => {
  const nav = useAppNavigation();

  return (
    <TableLayout.Subpage>
      <TableLayout.Title>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <GoBackButton onClick={() => nav.toPreviousPage()} />
          <h3>Sessions</h3>
        </FlexRow.Container>
      </TableLayout.Title>
      <TableLayout.Filter>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <Dropdown items={["Math", "Geo", "IT", "Math", "Geo"]} />
          <TextInput placeholder="Author" />
        </FlexRow.Container>
      </TableLayout.Filter>
      <TableLayout.Table>
        <SessionsTable onEditClick={() => {}} />
      </TableLayout.Table>
      <TableLayout.Footer>
        <FlexRow.Container itemsPosition={RowPositionEnum.center}>
          <Paginator page={8} onPageChange={() => {}} pages={20} />
        </FlexRow.Container>
      </TableLayout.Footer>
    </TableLayout.Subpage>
  );
};

export default SessionsTablePage;
