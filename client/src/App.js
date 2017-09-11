import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GlobalNav from './components/GlobalNav';
import HomePage from './components/HomePage';


class App extends Component {
  render() {
    return (
     <Router>
         <div>
           
             <GlobalNav/>
             <Route exact path='/' component={HomePage}/>
             {/* <Route exact path='/' component={AllArtists}/> */}
             {/* <Route path='artist/:id' component={Artist}/> */}
        </div>
     </Router>
    );
  }
}

export default App;
