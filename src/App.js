import logo from './logo.svg';
import './App.css';

function App() {

  const hello = "안녕!"
  const element = <h1>{hello}</h1>

  return (
    <div>
      hello {hello}
      {element}
    </div>
  );
}

export default App;