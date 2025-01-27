
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './comps/header/Header';
import AfterHeader from './comps/afterHeader/AfterHeader';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
      <AfterHeader/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
