import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllArtists from "./components/AllArtists";
import GlobalNav from './components/GlobalNav';


class App extends Component {
  render() {
    return (
     <Router>
         <div>
           
             <GlobalNav/>
             <Route exact path='/' component={AllArtists}/>
             {/* <Route path='artist/:id' component={Artist}/> */}
        </div>
     </Router>
    );
  }
}

export default App;
