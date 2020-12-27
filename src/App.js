import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Video from './components/pages/Video';
import Pdf from './components/pages/Pdf';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Sign.component';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pdf' component={Pdf} />
          <Route path='/video' component={Video} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign' component={Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
