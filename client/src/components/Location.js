import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ArtistsCard from './ArtistsCard';

class Location extends Component {
    constructor(){
        super();
        this.state = {
            location: [],
            artists:[]
        }
    }

    componentWillMount(){
        this._fetchLocationAndArtists();
    }

    _fetchLocationAndArtists = async()=>{
        const id = this.props.match.params.id;
        const res = await axios.get(`/api/locations${id}`)
        this.setState({
            location: res.data.location,
            artists: res.data.artists
        })
    }
    render() {
        const id = this.props.match.params.id;
        return (
            <div>
                <h1>{this.state.location.address} {this.state.location}
                <Link to={`/locations/${this.props.match.params.id}/edit`}
                _fetchLocationAndArtists={this.props._fetchLocationAndArtists}>Edit</Link></h1>
                <Link to={`/locations/${id}/artist/new`}>Add a new Artist</Link>
                {this.state.artists.map((artist)=>(
                    <ArtistsCard key={artist.id} artist={artist} location={this.state.location}/>
                ))}
                <Link to='/locations'>Locations</Link>
            </div>
        );
    }
}

export default Location;