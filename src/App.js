
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';
import Header from './comps/header/Header';
import AfterHeader from './comps/afterHeader/AfterHeader';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
      <AfterHeader/>
      <Routes>
        
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
