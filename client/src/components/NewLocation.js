import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

class NewLocation extends Component {
    constructor(){
        super();
        this.state = {
            location: {
                address: '',
                photo_url: '',
                description: ''
            }
        }
    }

    _handleChange = (e)=>{
        const newState = {...this.state.location};
        newState[e.target.name] = e.target.value;
        this.setState({
            location: newState
        });
    }

    _addLocation = async (e)=>{
        const payload = this.state.location
        const response = await axios.post('/api/locations', payload)
    }
    render() {
        return (
            <div>
                    <Form onSubmit={this._addLocation}>
                        <div>
                        <label htmlFor='address'>Address: </label>
                        <input onChange={this._handleChange}
                        type='text'
                        address='address'
                        value={this.state.location.address}/>
                        </div>
                        <div>
                        <label htmlFor='Photo_url'>Photo_url: </label>
                        <input onChange={this._handleChange}
                        type='text'
                        photo_url='photo_url'
                        value={this.state.location.photo_url}/>
                        </div>
                        <div>
                        <label htmlFor='description'>Description: </label>
                        <input onChange={this._handleChange}
                        type='text'
                        description='description'
                        value={this.state.location.description}/>
                        </div>
                                                    
                    </Form>
                    </div>
        );
    }
}

export default NewLocation;