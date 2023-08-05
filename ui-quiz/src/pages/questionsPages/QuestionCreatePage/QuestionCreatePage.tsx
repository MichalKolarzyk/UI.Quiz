import WindowUnloadListener from "../../../components/listeners/WindowUnloadListener";
import { QuestionPageLayout } from "../../../layouts/QuestionPageLayout";
import { GapRowEnum, RowPositionEnum } from "../../../components/containers/FlexRow";
import FlexRow from "../../../components/containers/FlexRow";
import FlexColumn, { GapColumnEnum } from "../../../components/containers/FlexColumn";
import CreateQuestionForm from "../../../compoundComponents/CreateQuestionForm";

const QuestionCreatePage = () => {
  return (
    <CreateQuestionForm.Form>
      <WindowUnloadListener isModify={false} />
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
