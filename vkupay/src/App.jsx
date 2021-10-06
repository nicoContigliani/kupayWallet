import logo from './logo.svg';
import './App.css';
import Pre from './components/presentation/Pre';
import Main from './components/main/Main';
import { useState } from 'react';


function App() {

  const [cero, setCero] = useState(false)

  return (
    <div >
      <h1>hola</h1>

      {
        cero ? (

          <Pre></Pre>
        ) :
          (
            <Main></Main>

          )
      }

    </div>
  );
}

export default App;
