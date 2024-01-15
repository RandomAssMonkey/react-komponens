import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HibaUzenet } from './HibaUzenet';

const hibak = [
  'A felh. nevének egyedinek kell lennie',
  'A két jelszó nem egyezik',
  'Az email címben kell a @ karakter',
];

function App() {
  console.log('lefutott');

  const [username, setUsername] = useState('');

  return <div>
    <input type="text" onInput={e => {setUsername(e.currentTarget.value)}}/>
    <img src="mypic.jpg" alt="My pic"/>
    <p>Az aktuális username: {username}</p>
    <HibaUzenet hibauzenetek={hibak} sulyos={true}/>
    <HibaUzenet
      hibauzenetek={ username.length < 5 ? ['A username nem elég hosszú'] : []}
      sulyos={username.length < 3}/>
  </div>
}

export default App
