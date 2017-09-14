import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
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

class EditLocation extends Component {
    constructor(){
        super();
        this.state = {
            location: {
                address: '',
                photo_url: '',
                description: ''
            },
            redirect: false
        }
    }

    componentWillMount(){
        const locationId = this.props.match.params.id;
        this._fetchLocation(locationId)
    }

    _fetchLocation = async (locationId)=>{
        try{
            const response = await axios.get(`/api/locations/${locationId}`)

            await console.log(response.data.location)
            this.setState({
                location:{
                    address: response.data.location.address,
                    photo_url: response.data.location.photo_url,
                    description: response.data.location.description
                }
            })
        } catch (err){
            console.log(err)
        }
    }

    _editDay = async (e)=> {
        e.preventDefault();
        const location = this.state.location;
        const locationId = this.props.match.params.id;
        try{
            const response = await axios.patch(`/api/locations/${locationId}`, location)
            this.setState({redirect: true})
            return response.location;
        } catch (err) {
            console.log(err)
        }
    }

    _deleteDay = async (e)=>{
        const c = window.confirm('Are you sure you want to delete this location?');
        if (c === true){
            const id = this.props.match.params.id;
            try{
                const response = await axios.delete(`/aip/locations/${id}`)
                this.setState({redirect: true})
            } catch (err){
                console.log(err)
            }
        } else{
            console.log('Failed to delete the day')
        }
    }

    _handleChange = (e)=>{
        const newState = {...this.state.location}
        newState[e.target.name] = e.target.value;
        this.setState({
            location: newState
        })
    }
    render() {
        return (
            <div>
                {this.state.redirect ?
                <Redirect to={{pathname: '/locations', state: {refresh: true}}}/>
                :
                <div>
                    <Form>
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
                        <div>
                            <button onClick={this._editLocation}>Edit Location</button>
                        </div>                        
                    </Form>
                    <button onClick={this._deleteLocation}>Delete</button>
                    </div>
                }
            </div>
        );
    }
}

export default EditLocation;