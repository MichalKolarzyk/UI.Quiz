import './App.css';
import CreateQuestionView from './components/createQuestionComponent/CreateQuestionView';
import CreateQuestionViewModel from './components/createQuestionComponent/CreateQuestionViewModel';

function App() {

  const viewModel = CreateQuestionViewModel();

  return (
    <div className="App">
      <CreateQuestionView viewModel={viewModel}/>
    </div>
  );
}

export default App;
