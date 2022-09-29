import './App.css';
import Dumbbell from './Components/Dumbbell/Dumbbell';
import Exersises from './Components/Exsersises/Exersises';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Exersises></Exersises>
      <Dumbbell></Dumbbell>



    </div>
  );
}

export default App;
