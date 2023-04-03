import { CreateButton, GoBackButton } from "../../components/buttons";
import DropdownInput from "../../components/inputs/dropdownInput/DropdownInput";
import FormInput from "../../components/inputs/formInputs/FormInput";
import { SessionsTable } from "../../components/tables";
import Paginator from "../../components/tables/paginator/Paginator";
import useAppNavigation from "../../hooks/useAppNavigation";
import { FilterSection, FooterSection, Subpage, TableSection, TitleSection } from "../../layouts/TablePageLayout";

const SessionsTablePage = () => {
    const nav = useAppNavigation();

    return (
        <Subpage>
          <TitleSection>
            <GoBackButton onClick={() => nav.toPreviousPage()} />
            <span className="h3">Sessions</span>
          </TitleSection>
          <FilterSection>
            <DropdownInput
              labelTop="Category"
              labelBottom="chose from list..."
              items={["Math", "Geo", "IT", "Math", "Geo"]}
            />
            <FormInput placeholder="Author"></FormInput>
          </FilterSection>
          <TableSection>
            <SessionsTable onEditClick={() => {}} />
          </TableSection>
          <FooterSection>
            <Paginator page={8} onPageChange={() => {}} pages={20} />
          </FooterSection>
        </Subpage>
      );
}

export default SessionsTablePage;