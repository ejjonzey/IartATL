import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ArtistDiv = styled.div`
background-color: #d5d698;
`

const ArtistListStyles = styled.div`
margin: 20px 5%;
width: 90%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;


class Artist extends Component {
    constructor(){
        super();
        this.state = {
            artist: {}
        }
    }

    componentWillMount(){
        this._fetchArtist();
    }

    _fetchArtist = async ()=>{
        const id = this.props.match.params.id
        const res = await axios.get(`/api/artists/${id}`)
        console.log(res.data)
        this.setState({
            artist: res.data
        })
    }

    render() {

        return (
            <ArtistDiv>
            <ArtistListStyles>
                <h1>{this.state.artist.name}</h1>
                <img src={this.state.artist.photo_url}/>
                <h3>{this.state.artist.description}</h3>
                <Link to={`/artists/${this.props.match.params.id}/edit`}>Edit Artist</Link>
            </ArtistListStyles>
            </ArtistDiv>
        );
    }
}

export default Artist;