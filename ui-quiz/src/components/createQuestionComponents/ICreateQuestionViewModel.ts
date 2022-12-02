export interface ICreateQuestionViewModel{
    name: string,
    setName: (value: string) => void,
    createQuesion: () => void,
    disabled: boolean,
}