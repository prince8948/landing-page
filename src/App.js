// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Home/>
    {/* <About/> */}
            <Routes> 
              {/* <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} /> */}
           </Routes>
    </BrowserRouter>
  );
}

export default App;
