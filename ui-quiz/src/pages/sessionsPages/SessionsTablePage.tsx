import { GoBackButton } from "../../components/buttons";
import FlexRow from "../../components/flex/FlexRow";
import { Dropdown } from "../../components/dropdown";
import { SessionsTable } from "../../components/tables";
import Paginator from "../../components/tables/paginator/Paginator";
import { TextInput } from "../../components/textInput";
import useAppNavigation from "../../hooks/useAppNavigation";
import { GapRowEnum, RowPositionEnum } from "../../components/flex/types";
import { TablePageLayout } from "../../layouts";

const SessionsTablePage = () => {
  const nav = useAppNavigation();

  return (
    <TablePageLayout.Subpage>
      <TablePageLayout.Title>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <GoBackButton onClick={() => nav.toPreviousPage()} />
          <h3>Sessions</h3>
        </FlexRow.Container>
      </TablePageLayout.Title>
      <TablePageLayout.Filter>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <Dropdown items={["Math", "Geo", "IT", "Math", "Geo"]} />
          <TextInput placeholder="Author" />
        </FlexRow.Container>
      </TablePageLayout.Filter>
      <TablePageLayout.Table>
        <SessionsTable onEditClick={() => {}} />
      </TablePageLayout.Table>
      <TablePageLayout.Footer>
        <FlexRow.Container itemsPosition={RowPositionEnum.center}>
          <Paginator page={8} onPageChange={() => {}} pages={20} />
        </FlexRow.Container>
      </TablePageLayout.Footer>
    </TablePageLayout.Subpage>
  );
};

export default SessionsTablePage;
