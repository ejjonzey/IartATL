import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { setAxiosDefaults } from '../util';
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

class SignIn extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       password_confirmation: '',
       redirect: false
   }
 }

 _signUp = async (e) => {
   e.preventDefault();
   const payload = {
     email: this.state.email,
     password: this.state.password,
     password_confirmation: this.state.password_confirmation
   }
   const response = await axios.post('/auth', payload);
   setAxiosDefaults(response.headers);
   this.setState({redirect: true})
 }

 _signIn = (e) => {
   e.preventDefault();
   this.setState({redirect: true})
 }

 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }

 render() {
   if (this.state.redirect){
     return <Redirect to="/" />
   }
   return (
     <div>
       <Form onSubmit={this._signUp}>
         <div>
           <label htmlFor="email">E-mail: </label>
           <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
         </div>
         <div>
           <label htmlFor="password">Password: </label>
           <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
         </div>
         <div>
           <label htmlFor="password">Confirm Password: </label>
           <input onChange={this._handleChange} type="text" name="password_confirmation" value={this.state.password_confirmation} />
         </div>
         <Link to="/signin">Sign In</Link>
       </Form>
     </div>
   );
 }
}

export default SignIn;