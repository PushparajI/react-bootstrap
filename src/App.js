import logo from './logo.svg';
import Demo from './Demo';

import './App.css';

export default function App() {
  let count = 0;
  count++;
  count++;
  count++;
  return (
    <div className="App">
      <h1>Hello Batch{count}</h1>
      <Demo/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> start editing to see some magic happen
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App;
