import React from 'react';

const Form = (props) => {

    
    return(
        <div className="d-flex justify-content-around mt-3">
                <form onSubmit={props.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" value={props.form.name} onChange={props.onChangeHandler}/>
                        {props.errors.name && props.errors.name.message ? <span className="alert alert-danger">{props.errors.name.message}</span> : ""}
                        {!props.nameValid(props.form.name) && props.form.name.length !== 0 && <span className="alert alert-danger">Must be at least 2 characters!</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Genre</label>
                        <input type="text" name="genre" className="form-control" value={props.form.genre} onChange={props.onChangeHandler}/>
                        {props.errors.genre && props.errors.genre.message ? <span className="alert alert-danger">{props.errors.genre.message}</span> : ""}
                    </div>
                    {props.allValid(props.form) ? <input type="submit" className="btn btn-success" /> : <input type="submit" className="btn btn-success" disabled />}
                    <input type="submit" className="btn btn-success" />
                    
                </form>
            </div>
    )
}

export default Form;