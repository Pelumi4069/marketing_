import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Mhero from './Components/Mhero';
import Socials from './Components/Socials';
import About from './Components/About';
import Services from './Components/Services';
import Workflow from './Components/Workflow';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Mhero />
      <Socials />
      <About />
      <Services />
      <Workflow />
    </> 
  )
}

export default App;
