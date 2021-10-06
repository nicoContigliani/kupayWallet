import logo from './logo.svg';
import './App.css';
import Pre from './components/presentation/Pre';
import Main from './components/main/Main';
import { useState } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


function App() {

  const [cero, setCero] = useState(false)

  return (
    <div >
      <div className="App">
      <h1>Kupay</h1>

      </div>

     

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
