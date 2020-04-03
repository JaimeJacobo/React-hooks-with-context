import React, {useState} from 'react';
import MyContext from './context';
import MyInfo from './MyInfo';
import './App.css';

function App() {

  const [hooksState, changeHooksState] = useState({
    name: 'Jaime',
    lastName: 'Jacobo',
    infected: false
  });

  const stateAndFunction = {hooksState, changeHooksState}

  return (
    <MyContext.Provider value={stateAndFunction}>
      <div className="App">
        <h1>Hola mi nombre es {hooksState.name}</h1>
        <MyInfo />
      </div>      
    </MyContext.Provider>
  );
}

export default App;
