import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';


const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
`;


const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Raleway', sans-serif;
input{
    height: 50px;
    width: 50vw;
    font-size: 35px;
    margin: 7px;
    box-shadow: 0px 0px 15px black;
    font-family: 'Raleway', sans-serif;
}`

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

    _deleteArtist = async (e)=>{
        const id = this .props.match.params.id;
        try{
            const res = await axios.delete(`/api/artists/${id}`)
            this.setState({redirect: true})
        } catch(err){
            console.log(err)
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
            <Form onSubmit={this.handleSubmit}>
            <div> 
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' 
            value={this.state.artist.name} 
            onChange={this.handleChange} />
            </div>
            <br/>
            <div>
            <label htmlFor="photo_url">Photo_url: </label>
            <input type="text" name='photo_url' 
            value={this.state.artist.photo_url} 
            onChange={this.handleChange} />
            </div>
            <br/>
            <div>
            <label htmlFor="description">Description: </label>
            <input type="text" name='description' 
            value={this.state.artist.description} 
            onChange={this.handleChange} />
            </div>
            <input type="submit" value="Submit" />
        
            </Form>
         {this.state.redirect && (
             <Redirect to={'/artists'}/>
         )}
         <Button onClick={this._deleteArtist}>DELETE</Button>
         </div>
        );
    }
}

export default EditArtist;