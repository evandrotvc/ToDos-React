import React from 'react';
import './App.css';
import Dashboard from './components/cards'
import GlobalStyle from './styles/global'

function App() {
  return (
      <>
        <div className="App">
        <h1>todos</h1>
        </div>
        <Dashboard/>
        <GlobalStyle/>

    </>
  );
}

export default App;
