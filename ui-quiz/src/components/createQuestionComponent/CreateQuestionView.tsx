import { ChangeEvent } from "react"
import { ICreateQuestionViewModel } from "./ICreateQuestionViewModel"

import classes from './CreateQuestionView.module.scss'

const CreateQuestionView = (props: CreateQuestionViewProps) => {

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.viewModel.setName(event.target.value)
    }

    return <div className={classes.testClass}>
        <input disabled={props.viewModel.disabled} onChange={onNameChange} value={props.viewModel.name}></input>
        <button disabled={props.viewModel.disabled} onClick={props.viewModel.createQuesion}>Send</button>
    </div>
}

export interface CreateQuestionViewProps{
    viewModel : ICreateQuestionViewModel
}

export default CreateQuestionView