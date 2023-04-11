import { useEffect, useState } from "react";
import { GoBackButton, CreateButton } from "../../components/buttons";
import DropdownInput from "../../components/inputs/dropdownInput/DropdownInput";
import FormInput from "../../components/inputs/formInputs/FormInput";
import { QuizzesTable } from "../../components/tables";
import Paginator from "../../components/tables/paginator/Paginator";
import useAppNavigation from "../../hooks/useAppNavigation";
import { ActionSection, FilterSection, FooterSection, Subpage, TableSection, TitleSection } from "../../layouts/TablePageLayout";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { GetQuizzesResponse } from "../../apis/apiQuiz/models/quiz";
import { useSelector } from "react-redux";
import { referenceItemsStateSelector } from "../../reducers/referenceItems/slice";
import { Dropdown } from "../../components/dropdown";
import { TextInput } from "../../components/textInput";
import useQuizzesSearchParams from "./searchParams";

const QuizTablePage = () => {
    const nav = useAppNavigation();
    const [quizResponse, setQuizResponse] = useState<GetQuizzesResponse>()
    const {categories} = useSelector(referenceItemsStateSelector)
    const params = useQuizzesSearchParams();
    
    useEffect(() => {
      ApiQuizInstance.getQuizzes({
        author: null,
        category: null,
        skip:0,
        take: 7,
      }).then(r => {
        setQuizResponse(r.data);
      })
    },[params.author, params.category, params.page])

    const items = quizResponse?.quizes;

    return (
        <Subpage>
          <TitleSection>
            <GoBackButton onClick={() => nav.toHomePage()} />
            <h3>Quizzes</h3>
          </TitleSection>
          <FilterSection>
            <Dropdown value={params.category} setValue={params.setCategory} placeholder="Select category..." items={categories?.map(i => i.value)}/>
            <TextInput onChange={params.setAuthor} placeholder="Author"></TextInput>
          </FilterSection>
          <ActionSection>
            <CreateButton onClick={nav.toCreateQuizPage}>Create Quiz</CreateButton>
          </ActionSection>
          <TableSection>
            <QuizzesTable items={items} onEditClick={() => {}} />
          </TableSection>
          <FooterSection>
            <Paginator page={params.page} onPageChange={params.setPage} pages={1} />
          </FooterSection>
        </Subpage>
      );
}

export default QuizTablePage;