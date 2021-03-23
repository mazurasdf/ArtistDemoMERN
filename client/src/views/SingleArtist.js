import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const SingleArtist = (props) => {
    const [artist, setArtist] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/artists/${props.id}`)
            .then(res=> setArtist(res.data.artist))
            .catch(err=> console.log(err))
    }, [props.id])
    return(
        <div>
            <h1>{artist.name}</h1>
            <h3><i>{artist.genre}</i></h3>
            <Link to={`/artists/${props.id}/edit`} className="btn btn-info">Edit</Link>
        </div>
    )
}

export default SingleArtist;