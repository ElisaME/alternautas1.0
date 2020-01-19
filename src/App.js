import React from 'react';
import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
      <p>Holaaaaaa Kiffy</p>
      <p>hola 2</p>
      {/* Aquí se importan los componentes si cambias el orden lo verás en la página */}
      <Menu></Menu>
      <Header></Header>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
