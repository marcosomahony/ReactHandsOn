import * as types from '../types/movie'

export function loadMovieSuccess(movie){
    return { type: types.LOAD_MOVIE_SUCCESS, movie }
}

export function loadMovieFailure(){
    return { type: types.LOAD_MOVIE_FAILURE }
}

export function getRecommendedSuccess(recommended){
    return { type: types.GET_RECOMMENDED_SUCCESS, recommended }
}

export function getRecommendedFailure(){
    return { type: types.GET_RECOMMENDED_FAILURE }
}

export function getSimilarSuccess(similar){
    return { type: types.GET_SIMILAR_SUCCESS, similar }
}

export function getSimilarFailure(){
    return { type: types.GET_SIMILAR_FAILURE }
}

export function loadMovie(id){
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(response => response.json())
        .then(movie => dispatch(loadMovieSuccess(movie)))
        .catch(error => {
            dispatch(loadMovieFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function getRecommended(id){
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    return dispatch => {
        fetch(url)
        .then(response => response.json())
        .then(recommended => dispatch(getRecommendedSuccess(recommended)))
        .catch(error => {
            dispatch(getRecommendedFailure())
            alert('Sin recomendaciones')
        })
    }
}

export function getSimilar(id){
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    return dispatch => {
        fetch(url)
        .then(response => response.json())
        .then(similar => dispatch(getSimilarSuccess(similar)))
        .catch(error => {
            dispatch(getSimilarFailure())
            alert('Sin similares')
        })
    }
}






