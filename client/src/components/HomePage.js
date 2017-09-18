import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100vw;
background-image: url("https://i.pinimg.com/originals/3e/80/b0/3e80b027eb2c27b09ee68dd2c7dd9300.jpg");
background-size: cover;
background-position: center;
`

class HomePage extends Component {
    render() {
        return (
            <HomePageContainer>
                
             </HomePageContainer>   
        );
    }
}

export default HomePage;