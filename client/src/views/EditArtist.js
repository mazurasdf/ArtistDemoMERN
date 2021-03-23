import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";
import Form from '../components/Form';

const EditArtist = (props) => {
    const [form, setForm] = useState({
        "name": "",
        "genre": ""
    })
    const [errors, setErrors] = useState({
        "name": "",
        "genre": ""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/artists/${props.id}`)
            .then(res=> setForm(res.data.artist))
            .catch(err=> console.log(err))
    }, [props.id])

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/artists/${props.id}`,form)
            .then(res => {
                console.log(res.data);
                if(res.data.artist){
                    props.setLoaded(false);
                    navigate(`/artists/${props.id}`);
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
            
            <h1>Edit artist</h1>
            <Form form={form} errors={errors} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} nameValid={nameValid} allValid={allValid}/>
        </div>
    )
}

export default EditArtist;