import { useParams } from "react-router-dom";
import { CancelButton, GoBackButton, RoundedButton } from "../../../components/buttons";
import DropdownInput from "../../../components/inputs/dropdownInput/DropdownInput";
import Textarea from "../../../components/inputs/textarea/Textarea";
import Switch from "../../../components/switches/Switch";
import useAppNavigation from "../../../hooks/useAppNavigation";
import {
  QuestionSection,
  AnswerSection,
  TitleSection,
  FooterSection,
  Subpage,
} from "../../../layouts/QuestionPageLayout";
import QuestionLoader from "../../../components/loaders/QuestionLoader";
import { useSelector } from "react-redux";
import { questionStateSelector } from "../../../reducers/questionReducers/selectors";
const QuestionPage = () => {
  const params = useParams();
  const id = params["questionId"];

  const nav = useAppNavigation();
  const {question} = useSelector(questionStateSelector);

  return (
    <QuestionLoader questionId={id}>
      <Subpage>
        <TitleSection>
          <GoBackButton onClick={() => nav.toPreviousPage()} />
          <span className="h3">Question</span>
        </TitleSection>
        <QuestionSection>
          <Textarea placeholder="Question" value={question?.description}/>
          <Switch label="Private" value={question?.isPrivate}/>
          <div>
            <DropdownInput value={question?.category} labelTop="Category" labelBottom="Choose from the list..." items={["1", "2"]} />
            <DropdownInput value={question?.defaultLanugage} labelTop="Language" labelBottom="Choose from the list..." items={["1", "2"]} />
          </div>
        </QuestionSection>
        <AnswerSection>
          <div>
            <RoundedButton>+ Add</RoundedButton>
          </div>
        </AnswerSection>
        <FooterSection>
          <CancelButton />
          <RoundedButton>Save</RoundedButton>
        </FooterSection>
      </Subpage>
    </QuestionLoader>
  );
};

export default QuestionPage;
