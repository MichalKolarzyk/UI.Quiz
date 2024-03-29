export interface CreateQuestionRequest {
  question: string;
  answers: Array<string>;
  correctAnswerIndex: number;
  isPrivate: boolean;
  category: string;
  defaultLanugage: string;
}

export interface CreateQuestionResponse {
  id: string;
}

export interface CreateQuestionError{
  description: string,
  answers: string,
  correctAnswerIndex: string,
  category: string,
}
