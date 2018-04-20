import * as types from '../types/movie'
import initialState from './initialState'

export default function moviesReducer(state= initialState.movie, action){
    switch(action.type){
        case types.LOAD_MOVIE_SUCCESS:
            return {
                ...action.movie,
                recommended: state.recommended
            }
        case types.GET_RECOMMENDED_SUCCESS:
            return {
                ...state,
                recommended: action.recommended
            }
        case types.GET_SIMILAR_SUCCESS:
        console.log('similares: ', action.similar)
            return {   
                ...state,
                similar: action.similar
            }
        default:
            return state
  }
}
