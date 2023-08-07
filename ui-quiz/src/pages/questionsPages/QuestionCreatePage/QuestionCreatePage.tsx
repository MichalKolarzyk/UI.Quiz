import FlexRow from "../../../components/flex/FlexRow";
import FlexColumn from "../../../components/flex/FlexColumn";
import CreateQuestionForm from "../../../compoundComponents/CreateQuestionForm";
import { GapRowEnum, GapColumnEnum, RowPositionEnum } from "../../../components/flex/types";
import { QuestionLayout } from "../../../layouts";

const QuestionCreatePage = () => {
  return (
    <CreateQuestionForm.Form>
      <QuestionLayout.Main>
        <QuestionLayout.Title>
          <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
            <CreateQuestionForm.GoBack/>
            <h3>Create Question</h3>
          </FlexRow.Container>
        </QuestionLayout.Title>
        <QuestionLayout.Question>
          <FlexColumn.Container gap={GapColumnEnum.big}>
            <CreateQuestionForm.Question/>
            <CreateQuestionForm.IsPrivate/>
            <CreateQuestionForm.Category/>
            <CreateQuestionForm.Language/>
          </FlexColumn.Container>
        </QuestionLayout.Question>
        <QuestionLayout.Answer>
          <FlexColumn.Container gap={GapColumnEnum.big}>
            <CreateQuestionForm.Answers/>
          </FlexColumn.Container>
        </QuestionLayout.Answer>
        <QuestionLayout.Footer>
          <FlexRow.Container itemsPosition={RowPositionEnum.right} gap={GapRowEnum.medium}>
            <CreateQuestionForm.Cancel/>
            <CreateQuestionForm.CreateQuestion/>
          </FlexRow.Container>
        </QuestionLayout.Footer>
      </QuestionLayout.Main>
    </CreateQuestionForm.Form>
  );
};

export default QuestionCreatePage;
