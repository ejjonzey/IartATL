import React, { Component } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const ArtistListStyles = styled.div`
margin: 20px 5%;
width: 90%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;


class AllLocations extends Component {
    constructor(){
        super();
        this.state = {
            error: '',
            locations: []
        }
    }

    componentWillMount(){
        this._fetchLocations();
    }

    _fetchLocations = async()=>{
        try{
            const response = await axios.get('/api/locations')
            const locations = response.data;
            this.setState({locations});
        } catch (err){
            this.steState({error: err});
        }
    }
    render() {
        return (
            <div>
            <Link to='/locations/new'>Add Location</Link>
                {this.state.locations.map((location)=>(
                  <LocationCard key={location.id} location={location}/>  
                ))}
            </div>
        );
    }
}

export default AllLocations;