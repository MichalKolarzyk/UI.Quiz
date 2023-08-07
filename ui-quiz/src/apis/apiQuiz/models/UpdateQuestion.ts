export interface UpdateQuestionRequest {
  id: string;
  question: string;
  answers: Array<string>;
  correctAnswerIndex: number;
  isPrivate: boolean;
  category: string;
  defaultLanugage: string;
}
