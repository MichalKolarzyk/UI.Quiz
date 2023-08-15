import FlexRow from "../../../components/flex/FlexRow";
import FlexColumn from "../../../components/flex/FlexColumn";
import { GapColumnEnum, GapRowEnum, RowPositionEnum } from "../../../components/flex/types";
import { QuestionLayout } from "../../../layouts";
import QuestionForm from "../../../compoundComponents/QuestionForm";

const QuestionPage = () => {
  return (
    <QuestionForm.Form>
      <QuestionLayout.Main>
        <QuestionLayout.Title>
          <FlexRow.Container fullHeight gap={GapRowEnum.medium}>
            <QuestionForm.GoBack />
            <h3>Question</h3>
          </FlexRow.Container>
        </QuestionLayout.Title>
        <QuestionLayout.Question>
          <FlexColumn.Container gap={GapColumnEnum.big}>
            <QuestionForm.Question />
            <QuestionForm.IsPrivate />
            <QuestionForm.Category />
            <QuestionForm.Language />
          </FlexColumn.Container>
        </QuestionLayout.Question>
        <QuestionLayout.Answer>
          <FlexColumn.Container gap={GapColumnEnum.big}>
            <QuestionForm.Answears />
            <div>
              <QuestionForm.AddAnswear />
            </div>
          </FlexColumn.Container>
        </QuestionLayout.Answer>
        <QuestionLayout.Footer>
          <FlexRow.Container itemsPosition={RowPositionEnum.right} gap={GapRowEnum.medium}>
            <QuestionForm.Cancel />
            <QuestionForm.Save />
          </FlexRow.Container>
        </QuestionLayout.Footer>
      </QuestionLayout.Main>
    </QuestionForm.Form>
  );
};

export default QuestionPage;
