import React from 'react';
import MainPage from './pages/mainpage';
import Header from './components/header'
import Footer from './components/footer';
import 'normalize.css';

import './App.css';

function App() {
  return (
    <div className="App">
      {Header}
      {MainPage}
      {Footer}
    </div>
  );
}

export default App;
