export interface GetQuizResponse{
    questions: Array<GetQuizQuestionItem>;
    name: string,
    author: string,
}

export interface GetQuizQuestionItem {
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
  