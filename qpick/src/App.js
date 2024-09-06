import React from 'react';
import Mainpage from './pages/Mainpage.jsx'
import StoreBasket from './pages/StoreBasket.jsx'
import NotFound from './pages/NotFound.jsx';

import { Routes, Route} from 'react-router-dom';
import 'normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/bascket' element={<StoreBasket/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;