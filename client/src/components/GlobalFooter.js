import React, { Component } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
    height: 8vh;
    width: 100vw;
    background: #69FCEB;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-shadow: 0px 0px 15px black;
    box-shadow: 0px 0px 15px black;
    font-family: 'Raleway', sans-serif;
    .no {
        font-size: 6px;
    }
`

class GlobalFooter extends Component {
    render() {
        return (
            <FooterWrapper>
                <p>&copy;2017 Eric Jonelunas</p><p className="IKindaKnowWhatImDoing"></p>
            </FooterWrapper>
        );
    }
}

export default GlobalFooter;