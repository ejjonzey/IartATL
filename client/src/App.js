import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalNav from './components/GlobalNav';
import HomePage from './components/HomePage';
import AllArtists from './components/AllArtists';
import Artist from './components/Artist';
import AddArtist from './components/AddArtist';
import EditArtist from './components/EditArtist';


class App extends Component {
  render() {
    return (
     <Router>
         <div>
          <GlobalNav/>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/artists' component={AllArtists}/>
          <Route exact path='/artists/new' component={AddArtist}/>
          <Route exact path='/artists/:id' component={Artist}/>
          <Route exact path='/artists/:id/edit' component={EditArtist}/>
        </div>
     </Router>
    );
  }
}

export default App;
