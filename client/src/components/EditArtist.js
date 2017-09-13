import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

class EditArtist extends Component {
    constructor(props){
        super(props);
        this.state={
            redirect: false,
            artist: {
            name: '',
            photo_url: '',
            description: ''
        }};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        const artistId = this.props.match.params.id;
        this._fetchArtist(artistId);
    }

    _fetchArtist = async(artistId)=>{
        try{
            const res = await axios.get(`/api/artists/${artistId}`);
            const artist = res.data;
            console.log(artist)
            this.setState({
                artist: {
                    name: res.data.name,
                    photo_url: res.data.photo_url,
                    description: res.data.description
                }
            });
        } catch (err) {
            this.setState({error:err})
        }
    }

    handleChange = (e) => {
        const newState = {...this.state.artist};
        newState[e.target.name] = e.target.value;
        this.setState({
           artist: newState
        });
    }

    handleSubmit = async (e)=> {
    e.preventDefault();
    const id = this.props.match.params.id
    const payload = this.state.artist
    try{
        const res = await axios.patch(`/api/artists/${id}`, payload)
        const redirect = !this.state.redirect
        this.setState({redirect})
    }
    catch (err){
        console.log(err)
    }
}

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                
            <label>
          Name:
            <input type="text" name='name' value={this.state.artist.name} onChange={this.handleChange} />
            <br/>
          Photo_url:
            <input type="text" name='photo_url' value={this.state.artist.photo_url} onChange={this.handleChange} />
            <br/>
          Description:
            <input type="text" name='description' value={this.state.artist.description} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
            </label>
            </form>
         {this.state.redirect && (
             <Redirect to={'/artists'}/>
         )}
         </div>
        );
    }
}

export default EditArtist;