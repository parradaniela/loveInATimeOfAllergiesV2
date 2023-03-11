import { useState } from 'react';
import db from './firestore/firebase';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


function App() {
  

  return (
    <div className="App">
      <Header />
      <Main /> 
    </div>
  )
}

export default App
