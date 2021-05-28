import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'

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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
