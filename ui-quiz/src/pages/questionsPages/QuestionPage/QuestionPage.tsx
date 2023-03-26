import { useParams } from "react-router-dom";

const QuestionPage = () => {
    const params = useParams();
    const id = params['questionId']

    console.log("Question" + id)
    return <div>
        <div>Question</div>
        <div>{id}</div>
    </div>
}

export default QuestionPage;