import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
function App() {
  const location = useLocation()

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <h1>Hello from react</h1>
    </div>
  );
}

export default App;
