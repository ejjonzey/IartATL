import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalNav from './components/GlobalNav';
import HomePage from './components/HomePage';
import AllLocations from './components/AllLocations';
import Location from './components/Location';
import AddLocation from './components/AddLocation';
import EditLocation from './components/EditLocation';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


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
          <Route exact path='/SignUp' component={SignUp}/>
          <Route exact path='/SignIn' component={SignIn}/>
        </div>
     </Router>
    );
  }
}

export default App;
