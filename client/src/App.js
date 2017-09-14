import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalNav from './components/GlobalNav';
import HomePage from './components/HomePage';
import AllLocations from './components/AllLocations';
import Location from './components/Location';
import AddLocation from './components/AddLocation';
import EditLocation from './components/EditLocation';


class App extends Component {
  render() {
    return (
     <Router>
         <div>
          <GlobalNav/>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/locations' component={AllLocations}/>
          <Route exact path='/locations/new' component={AddLocation}/>
          <Route exact path='/locations/:id' component={Location}/>
          <Route exact path='/locations/:id/edit' component={EditLocation}/>
        </div>
     </Router>
    );
  }
}

export default App;
