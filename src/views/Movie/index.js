import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Comments from '../../views/Comments'
import MovieDisplay from '../../components/Movie'    //sustituir aqui pos ri las moscas

import * as movieActions from '../../actions/movieActions'

class Movie extends React.Component {
    constructor(props) {
        super(props)   

        this.state = {
            movie: {},
            comments: [],
            recommended: [],
            similar: []
        }
    }

    componentDidMount(){
        const { movieActions, match } = this.props
        const id = (Math.floor(Math.random() * 500000) + 30)

        if(match != undefined) {
            movieActions.loadMovie(match.params.id)
        }
        else {
            movieActions.loadMovie(id)   
        }
        movieActions.getRecommended(match.params.id);
        movieActions.getSimilar(match.params.id);
    }

    componentWillReceiveProps({movie, recommended, similar}) {
        console.log('pablld')
        this.setState({movie, recommended, similar})
    }

    render() {
        const { movie, comments, recommended } = this.state
        return (
            <section className="container main movie" style={{backgroundImage: movie.id ? `url(https://image.tmdb.org/t/p/w342/${movie.backdrop_path})` : ''}}>
                <div className="overlay"></div>
                <header className="row">
                    <div className="col-12">
                        <h1 style={{color: 'white'}}>{movie.id ? movie.title : 'Loading...'}</h1>
                    </div>
                </header>
                <article className="row movie-item">
                    <footer className="col-md-4 offset-md-1 my-4 movie-poster" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})`}}>

                    </footer>
                    <div className="col-md-6 my-4">
                        <header className="w-100">
                            <h1>{movie.title}</h1>
                        </header>
                        <p className="d-block">{movie.overview}</p>
                        <button type="button" className="btn btn-primary">Comentarios</button>
                        <button type="button" className="btn btn-secondary">Similares</button>
                        <button type="button" className="btn btn-secondary">Recomendados</button>
                    </div>
                </article>
                <div className="container col-md-12 my-4">
                    <Comments movieId={movie.id}/>
                </div>
                <div>
                    {
                        recommended.map((movie, i) => {
                            return(
                            <Movie
                                key = {i} 
                                {...movie}
                            />
                            )
                            
                        })
                    }
                </div>
            </section>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        movie: state.movie,
        recommended: state.recommended,
        smilar: state.similar
    }
}

function mapDispatchToProps(dispatch){
    return {
        movieActions: bindActionCreators(movieActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)

