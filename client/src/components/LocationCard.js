import React from 'react';
import {Link} from 'react-router-dom';


const LocationCard = (props) => {
    const location = props.location;
    return (
        <div>
        <Link to={`/locations/${location.id}`}>
        <h1>{location.address}</h1>
        <h1>{location.photo_url}</h1>
        <h1>{location.description}</h1>
        </Link>
        </div>
    );
};

export default LocationCard;