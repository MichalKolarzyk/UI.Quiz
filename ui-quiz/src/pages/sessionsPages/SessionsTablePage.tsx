import { CreateButton, GoBackButton } from "../../components/buttons";
import FlexRow, { GapRowEnum, RowPositionEnum } from "../../components/containers/FlexRow";
import { Dropdown } from "../../components/dropdown";
import DropdownInput from "../../components/inputs/dropdownInput/DropdownInput";
import FormInput from "../../components/inputs/formInputs/FormInput";
import { SessionsTable } from "../../components/tables";
import Paginator from "../../components/tables/paginator/Paginator";
import { TextInput } from "../../components/textInput";
import useAppNavigation from "../../hooks/useAppNavigation";
import TablePageLayout from "../../layouts/TablePageLayout";

const SessionsTablePage = () => {
  const nav = useAppNavigation();

  return (
    <TablePageLayout.Subpage>
      <TablePageLayout.TitleSection>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <GoBackButton onClick={() => nav.toPreviousPage()} />
          <h3>Sessions</h3>
        </FlexRow.Container>
      </TablePageLayout.TitleSection>
      <TablePageLayout.FilterSection>
        <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
          <Dropdown items={["Math", "Geo", "IT", "Math", "Geo"]} />
          <TextInput placeholder="Author" />
        </FlexRow.Container>
      </TablePageLayout.FilterSection>
      <TablePageLayout.TableSection>
        <SessionsTable onEditClick={() => {}} />
      </TablePageLayout.TableSection>
      <TablePageLayout.FooterSection>
        <FlexRow.Container itemsPosition={RowPositionEnum.center}>
          <Paginator page={8} onPageChange={() => {}} pages={20} />
        </FlexRow.Container>
      </TablePageLayout.FooterSection>
    </TablePageLayout.Subpage>
  );
};

export default SessionsTablePage;
