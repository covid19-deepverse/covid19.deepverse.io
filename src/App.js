// IMPORT REACT MODULES
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// IMPORT COMPONENTS
import Navbar from './components/Navbar';

// IMPORT PAGES
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import News from './pages/News';
import Statistics from './pages/Statistics';
import Thailand from './pages/Thailand';

// IMPORT SCSS
import './assets/sass/_main.scss';

// MAIN
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/donate" component={Donate} />
          <Route path="/news" component={News} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/thailand" component={Thailand} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
