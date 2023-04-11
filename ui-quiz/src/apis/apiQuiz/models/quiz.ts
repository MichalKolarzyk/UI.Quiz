export interface GetQuizzesResponse{
    quizes: Array<Quiz>
    count: number
}

export interface Quiz{
    id: string,
    name: string,
    author: string,
    questionCount: number,
    category : Array<string>
}

export interface GetQuizzesRequest{
    author: string | null,
    category: string | null,
    take: number,
    skip: number,
}