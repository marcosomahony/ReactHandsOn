import * as types from '../types/movies'
import { moviesURL } from '../utils'
const _ = require('lodash')

export function loadMoviesSuccess(movies, page){
    return { type: types.LOAD_MOVIES_SUCCESS, movies, page }
}

export function loadMoviesFailure(){
    return { type: types.LOAD_MOVIES_FAILURE }
}

export function deleteMoviesSuccess(movies){
    return { type: types.DELETE_MOVIES_SUCESS, movies }
}

export function loadMovies(page = 1, endpoint = 'popular'){
    return dispatch => {
        fetch(moviesURL[endpoint](page))
        .then(response => response.json())
        .then(json => json.results)
        .then(movies => dispatch(loadMoviesSuccess(movies, page)))
        .catch(error => {
            dispatch(loadMoviesFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function deleteMovie(movies, id){
    
    for(let i = 0; i<movies.length; i++ ) {
        if(movies[i].id === id ){
            console.log('jajajasdsadasdadadajaj')
            movies.splice(i, 1)
        }
    }
    return deleteMoviesSuccess(movies)
}





