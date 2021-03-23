import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";

const NewArtist = (props) => {
    const [form, setForm] = useState({
        "name": "",
        "genre": ""
    })
    const [errors, setErrors] = useState({
        "name": "",
        "genre": ""
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/artists/new",form)
            .then(res => {
                console.log(res.data);
                if(res.data.artist){
                    props.setLoaded(false);
                    navigate("/artists");
                }
                else{
                    setErrors(res.data.error.errors);
                }
            })
            .catch(err => console.log(err))
    }

    const nameValid = (name) => {
        return name.length >= 2;
    }

    const genreValid = (genre) => {
        return genre.length >= 1;
    }

    const allValid = (inputs) => {
        return nameValid(inputs.name) && genreValid(inputs.genre);
    }

    return(
        <div className="container">
            <h1>Create a new artist!</h1>
            <div className="d-flex justify-content-around mt-3">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" onChange={onChangeHandler}/>
                        {errors.name && errors.name.message ? <span className="alert alert-danger">{errors.name.message}</span> : ""}
                        {!nameValid(form.name) && form.name.length !== 0 && <span className="alert alert-danger">Must be at least 2 characters!</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Genre</label>
                        <input type="text" name="genre" className="form-control" onChange={onChangeHandler}/>
                        {errors.genre && errors.genre.message ? <span className="alert alert-danger">{errors.genre.message}</span> : ""}
                    </div>
                    {allValid(form) ? <input type="submit" className="btn btn-success" /> : <input type="submit" className="btn btn-success" disabled />}
                    
                </form>
            </div>
        </div>
    )
}

export default NewArtist;