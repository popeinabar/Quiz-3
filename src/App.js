
import './App.css';
import HomeComponent from './components/HomeComponent';
import Quizcomponent from './components/QuizComponent';
import Resultcomponent from './components/ResultComponent';

function App() {
  return (
    <div className="App">
       
     <HomeComponent/>
     <Quizcomponent/>
     <Resultcomponent/>
    </div>
  );
}

export default App;