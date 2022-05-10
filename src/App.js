
import './App.css';
import logo from './images/Amazon_logo.jpg';
import Button from './components/Btn';
import Accountant from './components/Accountant';
import { useState } from 'react';

function App() {
  const [numClicks, setNumclicks] = useState(0);

  const manageClick = () => {
    setNumclicks(numClicks + 1);
  }
  const decreaseClick = () => {
    setNumclicks(numClicks -1);
  }

  const restartAccount = () => {
    setNumclicks(0)
  }
  return (
    <div className="App">
      <div className="logo-contenedor"><img src={logo} alt="logo" className='logo' /></div>
      <div className="accountant-container">
        <Accountant numClicks={numClicks} />
        <Button
         text='Click'
          isClickBtn={true}
          manageClick={manageClick}/>
         
        <Button
           text='restart'
          isClickBtn={false}
          manageClick={restartAccount}
        />
        <Button
          text='Decrease Clicks'
          isClickBtn={true}
          manageClick={decreaseClick}
        />
      </div>
      
    </div>
  );
}

export default App;
