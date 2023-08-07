export interface FilterQuestionsRequest {
  take: number | null;
  skip: number | null;
  isPrivate: boolean | null;
  author: string | null;
  category: string | null;
}

export interface FilterQuestionResponse {
  questions: Array<FilterQuestionItem>;
  count: number;
}

export interface FilterQuestionItem {
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
  