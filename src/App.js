import './App.css';
import TodoApp from './components/TodoApp';
import {useSelector} from 'react-redux';

function App() {

  const select = useSelector(state => state)
  console.log(select);
  return (
    <div className="App">
    <TodoApp/>
     
    </div>
  );
}

export default App;
