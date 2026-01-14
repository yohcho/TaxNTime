//import { Routes, Route } from 'react-router-dom';
import { useRef } from 'react';

import Home from './home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import "./app.css"

function App() {
  const getStartedToggle = useRef(null)

  return (
    <div className='app'>
      <Header getStartedToggle={getStartedToggle}/>
      <Home getStartedToggle={getStartedToggle} />
      {/* <Routes>
        <Route path="/" element={<Home getStartedToggle={getStartedToggle}/>} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
