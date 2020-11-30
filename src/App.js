import React from 'react';
import './App.css';
import Header from './Components/Header'
import Body1 from './Components/Body1'
import Body2 from './Components/Body2'
import Cards from './Components/Card'
import Reviws from './Components/Reviwes'
import Email from './Components/Email'

function App() {
  return (
    <div className="App">
      <Header />
      <Body1 />
      <Body2 />
      <Cards />
      <Reviws />
      <Email />
    </div>
  );
}

export default App;
