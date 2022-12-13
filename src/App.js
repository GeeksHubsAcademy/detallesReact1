
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>


        </Routes>
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
