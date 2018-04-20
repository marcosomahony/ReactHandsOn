import React from 'react'
import { Link } from 'react-router-dom'

class Movie extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            poster: this.props.poster_path,
            id: this.props.id,
            title: this.props.title,
            overview: this.props.overview
        }
    }

    render() {
        const {poster, id, title, overview} = this.state
        return(
            <article 
                className="col-md-3 my-4 movie-item"
                style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${poster})`}}
            >
                <div className="overlay">
                    <header className="w-100 pt-3 px-3">
                        <Link className="d-block" to={`/movies/${id}`}>{title}</Link>
                        <button type="button" className="btn btn-danger" onClick={() => this.props.deleteMovie(id)}>Borrar</button>
                    </header>
                    <p>{overview}</p>
                </div>
            </article>
        )
    }
    
}

export default Movie