import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import About from './pages/About'
import Cast from './pages/Cast'
import Gameplay from './pages/Gameplay'

import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route exact path='/' >
          <About />
        </Route>
        <Route exact path='/cast'>
          <Cast />
        </Route>
        <Route exact path='/gameplay'>
          <Gameplay />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
