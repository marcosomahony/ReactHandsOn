import React, {Component} from 'react';

const Comment = ({username, body}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{username}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Dijo acerca de la pelicula: </h6>
                <h6 className="card-text">{body}</h6>
                <button type="button" className="btn btn-danger">Borrar</button>
            </div>
        </div>
    )
}

export default Comment;