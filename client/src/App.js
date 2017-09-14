import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalNav from './components/GlobalNav';
import HomePage from './components/HomePage';
import AllLocations from './components/AllLocations';
import Location from './components/Location';
import EditLocation from './components/EditLocation';
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
          <Route exact path='/locations' component={AllLocations}/>
          <Route exact path='/locations/:id' component={Location}/>
          <Route exact path='/locations/:id/edit' component={EditLocation}/>
          <Route exact path='/locations/:id/artist/new' component={AddArtist}/>
          <Route exact path='/locations/:locationId/artists/:id' component={Artist}/>
          <Route exact path='/locations/:locationId/artists/:id/edit' component={EditArtist}/>
        </div>
     </Router>
    );
  }
}

export default App;
