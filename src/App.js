// IMPORT REACT MODULES
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// IMPORT COMPONENTS
import Navbar from './components/Navbar';
import { Scale } from 'styled-loaders-react';

// IMPORT PAGES
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import News from './pages/News';
import Statistics from './pages/Statistics';
import Thailand from './pages/Thailand';
import Blog from './pages/Blog';

// IMPORT SCSS
import './assets/sass/_main.scss';

// MAIN
function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {isLoaded ? (
        <div className="loading">
          <Scale color="#FFFFFF" size="50px" duration="1.4s" />
        </div>
      ) : (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/donate" component={Donate} />
            <Route path="/news" component={News} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/thailand" component={Thailand} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
