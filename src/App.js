import { List } from "./components/List";
import { RandomWord } from "./components/RandomWord";
import style from './styles/styles.css'; 

function App() {
  return (
    <div className="App">
      <RandomWord />        
      <List />
    </div>
  );
}

export default App;
