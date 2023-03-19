import Paginator from "../../../components/tables/paginator/Paginator";

const QuestionsTablePage = () => {
    return <div>
        <Paginator initialPage={8} onPageChange={() => {}} pages={10}/>
    </div>
}

export default QuestionsTablePage;