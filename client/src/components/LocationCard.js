import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ArtistStyles = styled.div`
  width: 30%;
  height: 40em;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  img {
    width: 100%;
    max-height: 200px;
  }
  h3{
    padding: 5px 0;
  }
`;

const LocationCard = (props) => {
  const artist = props.artist;
  return (
    <ArtistStyles>
      <Link to={`/artists/${artist.id}`}>
        <img src={artist.photo_url} alt={artist.name} />
        <h3>{artist.name}</h3>
        <h4>{artist.description}</h4>
      </Link>
    </ArtistStyles>
  );
};

export default LocationCard;
