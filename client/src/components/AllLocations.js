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

class AllLocations extends Component{
    constructor(){
        super();
        this.state = {
            error: '',
            artists: []
        }
    }
     componentWillMount(){
         this._fetchArtists();
     }

     _fetchArtists = async()=>{
         try{
             const res = await axios.get('/api/artists');
             const artists = res.data;
             this.setState({artists});
         } catch (err) {
             this.setState({error:err})
         }
     }

     render(){
         return(
            <div>
            <Link to='/locations/new'>Add Locations</Link>
            <ArtistListStyles>
                 {this.state.artists.map((artist)=>(
                     <LocationCard key={artist.id} artist={artist}/>
                 ))}
            </ArtistListStyles>
            </div>
         )
     }
}


export default AllLocations;