import logo from './logo.svg';
import './App.css';
import Message from './components/homework';

function App() {
  return (
    <div className="App">
      < Message text="Этот текст был передан через props" />
    </div>
  );
}

export default App;
