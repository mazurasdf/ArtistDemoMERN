import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";
import Form from '../components/Form';

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
            <Form form={form} errors={errors} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} nameValid={nameValid} allValid={allValid}/>
        </div>
    )
}

export default NewArtist;