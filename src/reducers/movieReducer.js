import * as types from '../types/movie'
import initialState from './initialState'

export default function moviesReducer(state= initialState.movie, action){
    switch(action.type){
        case types.LOAD_MOVIE_SUCCESS:
            return action.movie
        case types.GET_RECOMMENDED_SUCCESS:
        console.log('array: ', action.recommended)
            return {
                ...state,
                recommended: action.recommended
            }
        case types.GET_SIMILAR_SUCCESS:
            return {
                ...state,
                similar: action.similar
            }
        default:
            return state
  }
}
