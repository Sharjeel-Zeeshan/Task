import logo from './logo.svg';
import './App.css';

import ReactRouter from './ReactRouter';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Counter from './Counter';
import Amazon from './Amazon'
import AmazonNew from './AmazonNew';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloadw
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/*      
    <Layout/> */}
      
       {/* <Amazon/> */}
       <AmazonNew/>

       {/* <Counter/> */}
      {/* <ReactRouter/> */}

    </div>
  );
}

export default App;
