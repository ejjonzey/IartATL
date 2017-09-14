import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import styled from 'styled-components';


const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Raleway', sans-serif;
input{
    height: 35px;
    width: 30vw;
    font-size: 35px;
    margin: 7px;
    box-shadow: 0px 0px 15px black;
    font-family: 'Raleway', sans-serif;
}`

class AddLocation extends Component {
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

    handleChange=(e)=>{
        const newState = {...this.state.artist};
        newState[e.target.name] = e.target.value;
        this.setState({
           artist: newState
        });
    }

    handleSubmit = async (e)=> {
    e.preventDefault();
    const payload = this.state.artist
    try{
        const res = await axios.post('/api/artists', payload)
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
                
            <label>
          Name:
            <input type="text" name='name' value={this.state.artist.name} onChange={this.handleChange} />
            <br/>
          Photo_url:
            <input type="text" name='photo_url' value={this.state.photo_url} onChange={this.handleChange} />
            <br/>
          Description:
            <input type="text" name='description' value={this.state.description} onChange={this.handleChange} />
            <br/>
            <input type="submit" value="Submit" />
            </label>
            </Form>
         {this.state.redirect && (
             <Redirect to={'/artists'}/>
         )}
         </div>
        );
    }
}

export default AddLocation;