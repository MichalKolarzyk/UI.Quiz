import { ChangeEvent } from "react"
import { ICreateQuestionViewModel } from "./ICreateQuestionViewModel"

//import './RelativeTest.scss'
import './GridTest.scss'

const CreateQuestionView = (props: CreateQuestionViewProps) => {

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.viewModel.setName(event.target.value)
    }

    return <div className="container">
        <input className="create-question__input-name" disabled={props.viewModel.disabled} onChange={onNameChange} value={props.viewModel.name}></input>
        <button className="create-question__send" disabled={props.viewModel.disabled} onClick={props.viewModel.createQuesion}>Send</button>
    </div>
}

export interface CreateQuestionViewProps{
    viewModel : ICreateQuestionViewModel
}

export default CreateQuestionView