import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "@reach/router";

const AllArtists = (props) => {
    return(
        <div>
            <h1>All Artists</h1>
            <div >
                <Link className="btn btn-primary" to="/artists/new/">Create</Link>
            </div>
            <table className="table table-hover mt-4">
                <thead>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                {
                    props.artists.map((artist, key)=>{
                    return <tr key={key}>
                            <td>{artist.name}</td>
                            <td><i>{artist.genre}</i></td>
                            <td><button onClick={() =>props.onDeleteHandler(artist._id)} className="btn btn-danger">remove</button></td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllArtists;