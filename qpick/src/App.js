import React from 'react';
import MainPage from './pages/mainpage.jsx'
import StoreBasket from './pages/StoreBasket.jsx'
// import NotFound from './pages/NotFound.jsx';

import { Routes, Route} from 'react-router-dom';

import 'normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/bascket' element={<StoreBasket/>}/>
        // <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
