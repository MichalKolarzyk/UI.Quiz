import FlexRow from "../../../components/flex/FlexRow";
import FlexColumn from "../../../components/flex/FlexColumn";
import CreateQuestionForm from "../../../compoundComponents/CreateQuestionForm";
import { GapRowEnum, GapColumnEnum, RowPositionEnum } from "../../../components/flex/types";
import { QuestionPageLayout } from "../../../layouts";

const QuestionCreatePage = () => {
  return (
    <CreateQuestionForm.Form>
      <QuestionPageLayout.Main>
        <QuestionPageLayout.Title>
          <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
            <CreateQuestionForm.GoBack/>
            <h3>Create Question</h3>
          </FlexRow.Container>
        </QuestionPageLayout.Title>
        <QuestionPageLayout.Question>
          <FlexColumn.Container gap={GapColumnEnum.big}>
            <CreateQuestionForm.Question/>
            <CreateQuestionForm.IsPrivate/>
            <CreateQuestionForm.Category/>
            <CreateQuestionForm.Language/>
          </FlexColumn.Container>
        </QuestionPageLayout.Question>
        <QuestionPageLayout.Answer>
          <FlexColumn.Container gap={GapColumnEnum.big}>
            <CreateQuestionForm.Answers/>
          </FlexColumn.Container>
        </QuestionPageLayout.Answer>
        <QuestionPageLayout.Footer>
          <FlexRow.Container itemsPosition={RowPositionEnum.right}>
            <CreateQuestionForm.Cancel/>
            <CreateQuestionForm.CreateQuestion/>
          </FlexRow.Container>
        </QuestionPageLayout.Footer>
      </QuestionPageLayout.Main>
    </CreateQuestionForm.Form>
  );
};

export default QuestionCreatePage;
