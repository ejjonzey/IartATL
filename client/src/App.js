import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalNav from './components/GlobalNav';
import HomePage from './components/HomePage';
import AllArtists from './components/AllArtists';
import Artist from './components/Artist';


class App extends Component {
  render() {
    return (
     <Router>
         <div>
           
             <GlobalNav/>
             <Route exact path='/' component={HomePage}/>
             <Route exact path='/artists' component={AllArtists}/>
             <Route path='artist/:id' component={Artist}/>
        </div>
     </Router>
    );
  }
}

export default App;
