export interface GetQuestionResponse {
  id: string;
  description: string;
  answers: Array<string>;
  correctAnswerIndex: number;
  isPrivate: boolean;
  category: string;
  defaultLanugage: string;
  author: string;
  canUserEdit: boolean;
}
