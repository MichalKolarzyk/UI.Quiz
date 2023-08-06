import { QuestionPageLayout } from "../../../layouts/QuestionPageLayout";
import FlexRow from "../../../components/flex/FlexRow";
import FlexColumn from "../../../components/flex/FlexColumn";
import CreateQuestionForm from "../../../compoundComponents/CreateQuestionForm";
import { GapRowEnum, GapColumnEnum, RowPositionEnum } from "../../../components/flex/types";

const QuestionCreatePage = () => {
  return (
    <CreateQuestionForm.Form>
      <QuestionPageLayout.Main>
        <QuestionPageLayout.TitleSection>
          <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
            <CreateQuestionForm.GoBack/>
            <h3>Create Question</h3>
          </FlexRow.Container>
        </QuestionPageLayout.TitleSection>
        <QuestionPageLayout.QuestionSection>
          <FlexColumn.Container gap={GapColumnEnum.big}>
            <CreateQuestionForm.Question/>
            <CreateQuestionForm.IsPrivate/>
            <CreateQuestionForm.Category/>
            <CreateQuestionForm.Language/>
          </FlexColumn.Container>
        </QuestionPageLayout.QuestionSection>
        <QuestionPageLayout.AnswerSection>
          <FlexColumn.Container gap={GapColumnEnum.big}>
            <CreateQuestionForm.Answers/>
          </FlexColumn.Container>
        </QuestionPageLayout.AnswerSection>
        <QuestionPageLayout.FooterSection>
          <FlexRow.Container itemsPosition={RowPositionEnum.right}>
            <CreateQuestionForm.Cancel/>
            <CreateQuestionForm.CreateQuestion/>
          </FlexRow.Container>
        </QuestionPageLayout.FooterSection>
      </QuestionPageLayout.Main>
    </CreateQuestionForm.Form>
  );
};

export default QuestionCreatePage;
