import React from 'react'
import { Link } from 'react-router-dom'



class TVShow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            poster: this.props.poster_path,
            id: this.props.id,
            name: this.props.name,
            overview: this.props.overview
        }
    }

    deleteTVShow = e => {
        console.log(this.state.id)
    }

    render(){
        const {poster, id, name, overview} = this.state
        return(
            <article 
                className="col-md-3 my-4 movie-item"
                style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${poster})`}}
            >
                <div className="overlay">
                    <header className="w-100 pt-3 px-3">
                        <Link className="d-block" to={`/tvshows/${id}`}>{name}</Link>
                        <button type="button" className="btn btn-danger" onClick={this.deleteTVShow}>Borrar</button>
                    </header>
                    <p>{overview}</p>
                </div>
            </article>
        )
    }
}

export default TVShow