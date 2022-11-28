import { useState } from "react"
import { ICreateQuestionViewModel } from "./ICreateQuestionViewModel"

const CreateQuestionViewModel = () => {
    const [name, setName] = useState<string>("")
    const [disabled, setDisabled] = useState<boolean>(false)

    const ceateQuestion = () =>{
        console.log(`the name is ${name}`);
        setDisabled(true);
        setName("");
    }
    return{
        name: name,
        setName: setName,
        createQuesion: ceateQuestion,
        disabled: disabled,
    } as ICreateQuestionViewModel
}



export default CreateQuestionViewModel