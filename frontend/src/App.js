import React, { useState } from 'react';
import './global.css';
import Routes from './routes';

function App() {
  //const [counter, setCounter] = useState(0);

  //function increment(){
  //  setCounter(counter + 1);
  //  console.log(counter)
  //}

  return (
    //<div>
    //  <Header>Contador: {counter}</Header>
    //  <button onClick={increment}>Incrementar</button>
    //</div>
    <Routes />
  );
}

export default App;
