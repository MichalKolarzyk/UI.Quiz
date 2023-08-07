export interface GetQuizzesResponse {
  quizes: Array<GetQuizzesItem>;
  count: number;
}

export interface GetQuizzesItem {
  id: string;
  name: string;
  author: string;
  questionCount: number;
  category: Array<string>;
}

export interface GetQuizzesRequest {
  author: string | null;
  category: string | null;
  take: number;
  skip: number;
}
