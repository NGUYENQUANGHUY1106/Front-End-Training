import logo from './logo.svg';
import './App.css';
import Content from './content';
import { useState } from 'react';
// dùng useEffect khi muốn dùng Side effects
import { useEffect } from 'react';
function App() {
  const [show,setShow] = useState(false)
  
  return (
    <div className="App">
      <button onClick={()=> setShow(!show)}>Toggle</button>
      {show && <Content/>}
    </div>
  );
}

export default App;
